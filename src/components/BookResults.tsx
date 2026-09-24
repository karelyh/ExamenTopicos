import React from 'react';
import type { Book } from '../hooks/useBookSearch';
import '../styles/BookResults.css';

interface BookResultsProps {
  books: Book[];
  isLoading: boolean;
}

export const BookResults: React.FC<BookResultsProps> = ({ books, isLoading }) => {
  if (isLoading) return <p className="status-message">Buscando libros...</p>;
  if (books.length === 0) return <p className="status-message">No hay resultados para mostrar.</p>;

  return (
    <div className="book-results">
      {books.map((book) => (
        <div key={book.key} className="book-card">
          {book.cover_i ? (
             /* Armar las portadas con el cover_i[cite: 1] */
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={`Portada de ${book.title}`}
            />
          ) : (
            <div className="no-cover">Sin Portada</div>
          )}
          <div className="book-info">
            <h3>{book.title}</h3>
            <p>{book.author_name ? book.author_name.join(', ') : 'Autor desconocido'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};