import { DEFAULT_SETTINGS, type Settings, type StudentProfile } from "../../domain/profile";
import type { ProfileRepository, ProgressEntry, ProgressRepository, SettingsRepository } from "../../ports";

const PREFIX = "easy-homework:";

function read<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // Storage may be full or blocked (private mode); the app keeps working in memory.
  }
}

export class LocalStorageProfileRepository implements ProfileRepository {
  load(): StudentProfile | null {
    const profile = read<StudentProfile>("profile");
    return profile && typeof profile.name === "string" && Array.isArray(profile.interests) ? profile : null;
  }
  save(profile: StudentProfile): void {
    write("profile", profile);
  }
  clear(): void {
    try {
      localStorage.removeItem(PREFIX + "profile");
      localStorage.removeItem(PREFIX + "progress");
    } catch {
      /* ignore */
    }
  }
}

export class LocalStorageSettingsRepository implements SettingsRepository {
  load(): Settings {
    return { ...DEFAULT_SETTINGS, ...(read<Partial<Settings>>("settings") ?? {}) };
  }
  save(settings: Settings): void {
    write("settings", settings);
  }
}

export class LocalStorageProgressRepository implements ProgressRepository {
  list(): ProgressEntry[] {
    return read<ProgressEntry[]>("progress") ?? [];
  }
  record(attempt: { topicId: string; percent: number; completedAt: string; nextReviews?: string[] }): void {
    const entries = this.list();
    const existing = entries.find((e) => e.topicId === attempt.topicId);
    if (existing) {
      existing.bestPercent = Math.max(existing.bestPercent, attempt.percent);
      existing.attempts += 1;
      existing.lastStudiedAt = attempt.completedAt;
      existing.nextReviews = attempt.nextReviews ?? existing.nextReviews;
    } else {
      entries.push({
        topicId: attempt.topicId,
        bestPercent: attempt.percent,
        attempts: 1,
        lastStudiedAt: attempt.completedAt,
        nextReviews: attempt.nextReviews,
      });
    }
    write("progress", entries);
  }
}
