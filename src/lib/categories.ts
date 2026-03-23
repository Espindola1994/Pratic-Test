import { allStudyItems, categories } from "../data/study-data";
import { StudyItem } from "../types/study";

export function getItemsByCategory(category: string): StudyItem[] {
  return allStudyItems.filter(item => item.category === category);
}

export function getAllCategories(): string[] {
  return categories;
}

export function getCategoryStats() {
  const stats = categories.map(cat => ({
    category: cat,
    count: getItemsByCategory(cat).length
  }));
  return stats;
}

export function getRandomItems(count: number = 20): StudyItem[] {
  const shuffled = [...allStudyItems].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function searchItems(query: string): StudyItem[] {
  const lowerQuery = query.toLowerCase();
  return allStudyItems.filter(
    item => 
      item.question.toLowerCase().includes(lowerQuery) || 
      item.answer.toLowerCase().includes(lowerQuery)
  );
}
