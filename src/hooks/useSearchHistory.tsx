import { useState } from 'react';

export const useSearchHistory = () => {
  const [history, setHistory] = useState<string[]>([]);

  const addSearchTerm = (term: string) => {
    const trimmedTerm = term.trim();
    if (!trimmedTerm) return;
    
    setHistory(prevHistory => {
      if (prevHistory.includes(trimmedTerm)) {
        return prevHistory;
      }
      return [trimmedTerm, ...prevHistory];
    });
  };

  return { history, addSearchTerm };
};