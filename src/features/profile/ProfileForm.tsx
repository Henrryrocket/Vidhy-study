import { useState, type FormEvent } from "react";
import { GRADES, INTERESTS } from "../../app/interests";
import type { Interest } from "../../domain/lesson";
import { validateProfile, type ProfileErrors, type StudentProfile } from "../../domain/profile";

interface Props {
  initial?: StudentProfile | null;
  submitLabel: string;
  onSubmit: (profile: StudentProfile) => void;
}

export function ProfileForm({ initial, submitLabel, onSubmit }: Props) {
  const [name, setName] = useState(initial?.name ?? "");
  const [age, setAge] = useState(initial ? String(initial.age) : "");
  const [grade, setGrade] = useState(initial ? String(initial.grade) : "");
  const [interests, setInterests] = useState<Interest[]>(initial?.interests ?? []);
  const [errors, setErrors] = useState<ProfileErrors>({});

  const toggle = (id: Interest) =>
    setInterests((current) => (current.includes(id) ? current.filter((i) => i !== id) : [...current, id]));

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const profile: StudentProfile = { name: name.trim(), age: Number(age), grade: Number(grade), interests };
    const found = validateProfile(profile);
    setErrors(found);
    if (Object.keys(found).length === 0) onSubmit(profile);
  };

  return (
    <form className="stack" onSubmit={submit} noValidate>
      <label className="field">
        ¿Cómo te llamas?
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre o apodo" autoComplete="given-name" maxLength={40} />
        {errors.name && <span className="field__error">{errors.name}</span>}
      </label>

      <div className="row" style={{ alignItems: "flex-start" }}>
        <label className="field" style={{ flex: "1 1 120px" }}>
          Edad
          <input type="number" inputMode="numeric" min={10} max={18} value={age} onChange={(e) => setAge(e.target.value)} placeholder="13" />
          {errors.age && <span className="field__error">{errors.age}</span>}
        </label>
        <label className="field" style={{ flex: "2 1 200px" }}>
          Grado
          <select value={grade} onChange={(e) => setGrade(e.target.value)}>
            <option value="">Elige tu grado</option>
            {GRADES.map((g) => (
              <option key={g.value} value={g.value}>
                {g.label}
              </option>
            ))}
          </select>
          {errors.grade && <span className="field__error">{errors.grade}</span>}
        </label>
      </div>

      <fieldset className="field" style={{ border: 0, padding: 0, margin: 0 }}>
        <legend style={{ marginBottom: 8 }}>¿Qué te gusta? Lo usaremos para explicarte con ejemplos de tu mundo.</legend>
        <div className="row">
          {INTERESTS.map((interest) => (
            <button
              type="button"
              key={interest.id}
              className="chip"
              aria-pressed={interests.includes(interest.id)}
              onClick={() => toggle(interest.id)}
            >
              <span aria-hidden>{interest.emoji}</span> {interest.label}
            </button>
          ))}
        </div>
        {errors.interests && <span className="field__error">{errors.interests}</span>}
      </fieldset>

      <button type="submit" className="btn btn--block">
        {submitLabel}
      </button>
    </form>
  );
}
