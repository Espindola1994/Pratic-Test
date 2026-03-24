import { useState, useEffect } from 'react';
import { StudyItem } from '@/types/study';

export function useFavorites() {
  const [favorites, setFavorites] = useState<StudyItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('rov_favorites');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading favorites from localStorage', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const saveFavorites = (newFavorites: StudyItem[]) => {
    try {
      localStorage.setItem('rov_favorites', JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } catch (error) {
      console.error('Error saving favorites to localStorage', error);
    }
  };

  const toggleFavorite = (item: StudyItem) => {
    const isFav = favorites.some((fav) => fav.id === item.id);
    if (isFav) {
      saveFavorites(favorites.filter((fav) => fav.id !== item.id));
    } else {
      saveFavorites([...favorites, item]);
    }
  };

  const removeFavorite = (id: string) => {
    saveFavorites(favorites.filter((fav) => fav.id !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some((fav) => fav.id === id);
  };

  return {
    favorites,
    isLoaded,
    toggleFavorite,
    removeFavorite,
    isFavorite,
  };
}
