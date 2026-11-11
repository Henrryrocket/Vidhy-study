import { useEffect, useState } from "react";

export type Route =
  | { name: "home" }
  | { name: "encyclopedia"; subjectId?: string }
  | { name: "topic"; topicId: string }
  | { name: "profile" };

export function parseHash(hash: string): Route {
  const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
  switch (parts[0]) {
    case "enciclopedia":
      return { name: "encyclopedia", subjectId: parts[1] };
    case "tema":
      return parts[1] ? { name: "topic", topicId: parts[1] } : { name: "home" };
    case "perfil":
      return { name: "profile" };
    default:
      return { name: "home" };
  }
}

export function href(route: Route): string {
  switch (route.name) {
    case "home":
      return "#/";
    case "encyclopedia":
      return route.subjectId ? `#/enciclopedia/${encodeURIComponent(route.subjectId)}` : "#/enciclopedia";
    case "topic":
      return `#/tema/${encodeURIComponent(route.topicId)}`;
    case "profile":
      return "#/perfil";
  }
}

export function navigate(route: Route): void {
  window.location.hash = href(route);
}

export function useRoute(): Route {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));
  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}
