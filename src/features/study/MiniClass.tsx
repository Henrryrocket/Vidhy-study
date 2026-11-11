import { useEffect, useRef, useState } from "react";
import type { MiniClassStep } from "../../domain/lesson";

const STEP_MS = 6000;

function speak(text: string) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
}

/** A short animated, narrated "video" built from the lesson steps. */
export function MiniClass({ steps }: { steps: MiniClassStep[] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [voice, setVoice] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const step = steps[index];
  const atEnd = index === steps.length - 1;

  useEffect(() => {
    if (voice && playing) speak(step.narration);
  }, [index, voice, playing, step.narration]);

  useEffect(() => {
    if (!playing) return;
    timer.current = window.setTimeout(() => {
      if (atEnd) setPlaying(false);
      else setIndex((i) => i + 1);
    }, STEP_MS);
    return () => window.clearTimeout(timer.current);
  }, [playing, index, atEnd]);

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  const play = () => {
    if (atEnd && !playing) setIndex(0);
    setPlaying((p) => !p);
    if (playing) window.speechSynthesis?.cancel();
  };

  return (
    <div className="stack">
      <div className="stage" aria-live="polite">
        <div className="stage__bar" aria-hidden>
          <span style={{ width: `${((index + 1) / steps.length) * 100}%` }} />
        </div>
        <div className="stage__scene" key={index} aria-hidden>
          {Array.from(new Intl.Segmenter("es", { granularity: "grapheme" }).segment(step.scene), (s) => s.segment).map((g, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.35}s` }}>
              {g}
            </span>
          ))}
        </div>
        <div className="stage__caption">
          <strong>
            {index + 1}. {step.title}:
          </strong>{" "}
          {step.narration}
        </div>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <button className="btn btn--ghost" onClick={() => setIndex((i) => Math.max(0, i - 1))} disabled={index === 0} aria-label="Paso anterior">
          ◀
        </button>
        <button className="btn" onClick={play}>
          {playing ? "⏸ Pausa" : atEnd ? "↺ Ver de nuevo" : "▶ Reproducir"}
        </button>
        <button className="btn btn--ghost" onClick={() => setIndex((i) => Math.min(steps.length - 1, i + 1))} disabled={atEnd} aria-label="Paso siguiente">
          ▶
        </button>
        {"speechSynthesis" in window && (
          <button className="chip" aria-pressed={voice} onClick={() => setVoice((v) => !v)}>
            🔊 Voz
          </button>
        )}
      </div>
    </div>
  );
}
