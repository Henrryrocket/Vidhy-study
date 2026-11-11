import { useState } from "react";
import type { StudentProfile } from "../../domain/profile";
import { ProfileForm } from "../profile/ProfileForm";

export function Onboarding({ onDone }: { onDone: (profile: StudentProfile) => void }) {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <main className="onboarding center">
        <div style={{ fontSize: "4rem" }} aria-hidden>
          🎓
        </div>
        <h1>Easy Homework</h1>
        <p className="muted">
          Tu enciclopedia para estudiar: resúmenes ilustrados, esquemas, mini-clases y preguntas para asegurarte de que entendiste.
        </p>
        <button className="btn btn--block" onClick={() => setStarted(true)}>
          Crear mi perfil
        </button>
        <p className="small muted" style={{ marginTop: 16 }}>
          Tu perfil se guarda solo en este dispositivo.
        </p>
      </main>
    );
  }

  return (
    <main className="onboarding">
      <h1>Cuéntanos de ti 👋</h1>
      <p className="muted">Así adaptamos las explicaciones a tu edad, tu grado y lo que te gusta.</p>
      <div className="card">
        <ProfileForm submitLabel="¡Empezar a estudiar!" onSubmit={onDone} />
      </div>
    </main>
  );
}
