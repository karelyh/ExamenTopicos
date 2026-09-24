import React from 'react';
import '../styles/SearchHistory.css';

interface SearchHistoryProps {
  history: string[];
  onHistoryClick: (term: string) => void;
}

export const SearchHistory: React.FC<SearchHistoryProps> = ({ history, onHistoryClick }) => {
  if (history.length === 0) return null;

  return (
    <div className="search-history">
      <h4>Búsquedas recientes:</h4>
      <div className="chips-container">
        {history.map((term, index) => (
          <span
            key={index}
            className="chip"
            onClick={() => onHistoryClick(term)}
          >
            {term}
          </span>
        ))}
      </div>
    </div>
  );
};