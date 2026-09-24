import { useState } from 'react';

export const useSearchHistory = () => {
  const [history, setHistory] = useState<string[]>([]);

  const addSearchTerm = (term: string) => {
    const trimmedTerm = term.trim();
    if (!trimmedTerm) return;

    setHistory(prevHistory => {
      const normalized = trimmedTerm.toLowerCase();

      const filtered = prevHistory.filter(
        item => item.trim().toLowerCase() !== normalized
      );

      return [trimmedTerm, ...filtered];
    });
  };

  return { history, addSearchTerm };
};