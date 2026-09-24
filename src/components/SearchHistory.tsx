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
      <h4 className="search-history__title">Búsquedas recientes</h4>
      <div className="search-history__list">
        {history.map((term, index) => (
          <button
            key={`${term}-${index}`}
            type="button"
            className="search-chip"
            onClick={() => onHistoryClick(term)}
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
};