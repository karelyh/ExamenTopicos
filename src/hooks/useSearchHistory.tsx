import { useState } from 'react';

export const useSearchHistory = () => {
  const [history, setHistory] = useState<string[]>([]);

  const addSearchTerm = (term: string) => {
    const trimmedTerm = term.trim();
    if (!trimmedTerm) return;
    
    setHistory(prevHistory => {
      // No repetir un chip si esa búsqueda ya existe en el historial
      if (prevHistory.includes(trimmedTerm)) {
        return prevHistory;
      }
      return [trimmedTerm, ...prevHistory];
    });
  };

  return { history, addSearchTerm };
};