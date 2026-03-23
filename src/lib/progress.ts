import { UserProgress } from '../types/study';

const PROGRESS_KEY = 'rov_study_progress';

export function getProgress(): UserProgress[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(PROGRESS_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveProgress(progress: UserProgress[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  }
}

export function updateItemProgress(itemId: string, updates: Partial<UserProgress>) {
  const progressList = getProgress();
  const existingIndex = progressList.findIndex(p => p.studyItemId === itemId);
  
  if (existingIndex >= 0) {
    progressList[existingIndex] = {
      ...progressList[existingIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };
  } else {
    progressList.push({
      id: crypto.randomUUID(),
      studyItemId: itemId,
      reviewed: false,
      difficult: false,
      reviewLater: false,
      ...updates,
      updatedAt: new Date().toISOString()
    });
  }
  
  saveProgress(progressList);
}

export function getItemProgress(itemId: string): UserProgress | undefined {
  return getProgress().find(p => p.studyItemId === itemId);
}

export function getStats() {
  const progressList = getProgress();
  return {
    totalReviewed: progressList.filter(p => p.reviewed || p.difficult || p.reviewLater).length,
    totalDifficult: progressList.filter(p => p.difficult).length,
    totalRight: progressList.filter(p => p.gotItRight).length,
    totalWrong: progressList.filter(p => p.gotItWrong).length,
    totalReviewLater: progressList.filter(p => p.reviewLater).length,
  };
}
