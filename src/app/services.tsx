import { createContext, useContext, type ReactNode } from "react";
import { CuratedContentProvider } from "../adapters/curated/CuratedContentProvider";
import {
  LocalStorageProfileRepository,
  LocalStorageProgressRepository,
  LocalStorageSettingsRepository,
} from "../adapters/storage/localStorageRepository";
import type { Lesson } from "../domain/lesson";
import type { ContentProvider, LessonGenerator, ProfileRepository, ProgressRepository, SettingsRepository } from "../ports";

export interface AppServices {
  content: ContentProvider;
  /** AI lesson generator for the superpowers switch. Not connected yet: plug an adapter in here. */
  generator: LessonGenerator | null;
  profiles: ProfileRepository;
  settings: SettingsRepository;
  progress: ProgressRepository;
  /** Lessons produced by the generator during this visit, looked up by id. */
  generatedLessons: Map<string, Lesson>;
}

export function createDefaultServices(): AppServices {
  return {
    content: new CuratedContentProvider(),
    generator: null,
    profiles: new LocalStorageProfileRepository(),
    settings: new LocalStorageSettingsRepository(),
    progress: new LocalStorageProgressRepository(),
    generatedLessons: new Map(),
  };
}

const ServicesContext = createContext<AppServices | null>(null);

export function ServicesProvider({ services, children }: { services: AppServices; children: ReactNode }) {
  return <ServicesContext.Provider value={services}>{children}</ServicesContext.Provider>;
}

export function useServices(): AppServices {
  const services = useContext(ServicesContext);
  if (!services) throw new Error("useServices must be used inside ServicesProvider");
  return services;
}
