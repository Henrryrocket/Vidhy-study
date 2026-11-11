import { useState } from "react";
import { useServices } from "../../app/services";
import type { Settings, StudentProfile } from "../../domain/profile";
import { ProfileForm } from "./ProfileForm";

interface Props {
  profile: StudentProfile;
  settings: Settings;
  onProfileChange: (profile: StudentProfile) => void;
  onSettingsChange: (settings: Settings) => void;
  onReset: () => void;
}

export function ProfilePage({ profile, settings, onProfileChange, onSettingsChange, onReset }: Props) {
  const { generator } = useServices();
  const [saved, setSaved] = useState(false);

  return (
    <>
      <h1>👤 Mi perfil</h1>

      <section className="card">
        <ProfileForm
          initial={profile}
          submitLabel={saved ? "¡Guardado! ✓" : "Guardar cambios"}
          onSubmit={(p) => {
            onProfileChange(p);
            setSaved(true);
            window.setTimeout(() => setSaved(false), 2000);
          }}
        />
      </section>

      <section className="card stack" aria-labelledby="superpowers-title">
        <div className="row" style={{ justifyContent: "space-between", flexWrap: "nowrap" }}>
          <div>
            <h2 id="superpowers-title" style={{ marginBottom: 4 }}>
              ⚡ Superpoderes
            </h2>
            <p className="small muted" style={{ margin: 0 }}>
              Estudia cualquier tema, aunque no esté en la enciclopedia, con lecciones generadas por inteligencia artificial.
            </p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              role="switch"
              aria-labelledby="superpowers-title"
              checked={settings.superpowers}
              onChange={(e) => onSettingsChange({ ...settings, superpowers: e.target.checked })}
            />
            <span />
          </label>
        </div>
        {settings.superpowers && !generator && (
          <p className="notice small" style={{ margin: 0 }}>
            Activado, pero el generador con IA aún no está conectado. Por ahora seguirás usando la enciclopedia.
          </p>
        )}
        {settings.superpowers && generator && <p className="small" style={{ margin: 0 }}>Conectado a: {generator.name}</p>}
      </section>

      <section className="card stack">
        <h2>🎨 Apariencia</h2>
        <div className="row" role="radiogroup" aria-label="Tema de color">
          {(
            [
              ["system", "Automático"],
              ["light", "☀️ Claro"],
              ["dark", "🌙 Oscuro"],
            ] as const
          ).map(([id, label]) => (
            <button key={id} type="button" role="radio" className="chip" aria-checked={settings.theme === id} aria-pressed={settings.theme === id} onClick={() => onSettingsChange({ ...settings, theme: id })}>
              {label}
            </button>
          ))}
        </div>
      </section>

      <section className="card stack">
        <h2>🔒 Tus datos</h2>
        <p className="small muted" style={{ margin: 0 }}>
          Tu perfil, preferencias y progreso se guardan solo en este dispositivo. No los enviamos a ningún servidor.
        </p>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            if (window.confirm("¿Borrar tu perfil y tu progreso de este dispositivo? No se puede deshacer.")) onReset();
          }}
        >
          Borrar mis datos
        </button>
      </section>
    </>
  );
}
