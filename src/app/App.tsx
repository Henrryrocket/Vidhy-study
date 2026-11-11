import { useEffect, useState } from "react";
import type { Settings, StudentProfile } from "../domain/profile";
import { Encyclopedia } from "../features/encyclopedia/Encyclopedia";
import { Home } from "../features/home/Home";
import { Onboarding } from "../features/onboarding/Onboarding";
import { ProfilePage } from "../features/profile/ProfilePage";
import { StudyFlow } from "../features/study/StudyFlow";
import { href, navigate, useRoute, type Route } from "./router";
import { useServices } from "./services";

const NAV: { route: Route; label: string; icon: string; match: Route["name"][] }[] = [
  { route: { name: "home" }, label: "Inicio", icon: "🏠", match: ["home", "topic"] },
  { route: { name: "encyclopedia" }, label: "Enciclopedia", icon: "📖", match: ["encyclopedia"] },
  { route: { name: "profile" }, label: "Perfil", icon: "👤", match: ["profile"] },
];

export function App() {
  const services = useServices();
  const route = useRoute();
  const [profile, setProfile] = useState<StudentProfile | null>(() => services.profiles.load());
  const [settings, setSettings] = useState<Settings>(() => services.settings.load());

  useEffect(() => {
    const root = document.documentElement;
    if (settings.theme === "system") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", settings.theme);
  }, [settings.theme]);

  const saveProfile = (next: StudentProfile) => {
    services.profiles.save(next);
    setProfile(next);
  };

  const saveSettings = (next: Settings) => {
    services.settings.save(next);
    setSettings(next);
  };

  if (!profile) {
    return (
      <Onboarding
        onDone={(p) => {
          saveProfile(p);
          navigate({ name: "home" });
        }}
      />
    );
  }

  return (
    <div className="shell">
      <nav className="nav" aria-label="Principal">
        <div className="nav__brand">
          <span aria-hidden>🎓</span> Easy Homework
        </div>
        {NAV.map((item) => (
          <a key={item.label} href={href(item.route)} aria-current={item.match.includes(route.name) ? "page" : undefined}>
            <span aria-hidden>{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>
      <main className="main">
        {route.name === "home" && <Home profile={profile} settings={settings} />}
        {route.name === "encyclopedia" && <Encyclopedia subjectId={route.subjectId} profile={profile} />}
        {route.name === "topic" && <StudyFlow key={route.topicId} topicId={route.topicId} profile={profile} />}
        {route.name === "profile" && (
          <ProfilePage
            profile={profile}
            settings={settings}
            onProfileChange={saveProfile}
            onSettingsChange={saveSettings}
            onReset={() => {
              services.profiles.clear();
              setProfile(null);
            }}
          />
        )}
      </main>
    </div>
  );
}
