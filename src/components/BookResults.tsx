import React from 'react';
import type { Book } from '../types/booksTypes';
import '../styles/BookResults.css';

interface BookResultsProps {
  books: Book[];
  isLoading: boolean;
}

export const BookResults: React.FC<BookResultsProps> = ({ books, isLoading }) => {
  if (isLoading) return <p className="status-message">Buscando libros ...</p>;
  if (books.length === 0) return <p className="status-message">No hay resultados a mostrar</p>;

  return (
    <div className="book-results">
      <div className="book-results__header">
        <h2 className="book-results__title">Resultados</h2>
        <p className="book-results__count">{books.length} Libros</p>
      </div>

      <div className="book-results__grid">
        {books.map((book) => (
          <article key={book.key} className="book-card">
            {book.cover_i ? (
              <img
                className="book-card__cover"
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={`Portada de ${book.title}`}
              />
            ) : (
              <div className="no-cover">Sin Portada</div>
            )}

            <div className="book-card__body">
              <h3 className="book-card__title">{book.title}</h3>
              <p className="book-card__author">
                {book.author_name ? book.author_name.join(', ') : 'Autor desconocido'}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};