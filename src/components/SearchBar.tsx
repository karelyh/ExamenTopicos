import React, { useState } from 'react';
import '../styles/SearchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
    setInputValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <label className="search-bar__label" htmlFor="book-search-input">
        Buscar por título o autor
      </label>

      <div className="search-bar__row">
        <input
          id="book-search-input"
          className="search-bar__input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ej. Harry Potter, Minions,"
        />
        <button className="search-bar__button" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
};