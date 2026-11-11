import type { SchoolYear } from "../domain/lesson";

/**
 * The app is centered on 2.º año of Educación Media General (MPPE).
 * 1.º año stays available as "Repaso"; 3.º–5.º año content is hidden for now.
 */
export const STUDY_FOCUS = {
  mainYear: 2 as SchoolYear,
  reviewYears: [1] as SchoolYear[],
  get visibleYears(): SchoolYear[] {
    return [...this.reviewYears, this.mainYear];
  },
};
