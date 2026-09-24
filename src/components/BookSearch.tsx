import React from 'react';
import { SearchBar } from './SearchBar';
import { SearchHistory } from './SearchHistory';
import { BookResults } from './BookResults';
import { useBookSearch } from '../hooks/useBookSearch';
import { useSearchHistory } from '../hooks/useSearchHistory';
import '../styles/BookSearch.css';

export const BookSearch: React.FC = () => {
  const { books, searchBooks, isLoading } = useBookSearch();
  const { history, addSearchTerm } = useSearchHistory();

  const handleSearch = (term: string) => {
    if (term.trim()) {
      searchBooks(term);
      addSearchTerm(term);
    }
  };

  return (
    <div className="book-search">
      <header className="book-search__header">
        <p className="book-search__kicker">Open Library</p>
        <h1 className="book-search__title">Buscador de Libros</h1>
        <p className="book-search__lead">
          Escribe un título, revisa los resultados en tarjetas y conserva cada búsqueda como un chip.
        </p>
      </header>

      <SearchBar onSearch={handleSearch} />
      <SearchHistory history={history} onHistoryClick={handleSearch} />
      <BookResults books={books} isLoading={isLoading} />
    </div>
  );
};