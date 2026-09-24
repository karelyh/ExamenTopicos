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
    <div className="book-search-container">
      <h1>Buscador de Libros</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchHistory history={history} onHistoryClick={handleSearch} />
      <BookResults books={books} isLoading={isLoading} />
    </div>
  );
};