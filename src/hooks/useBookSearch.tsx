import {useState } from 'react';
import {type Book } from '../types/booksTypes';
import {searchBooksAPI } from '../services/useService';

export const useBookSearch = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchBooks = async (query: string) => {
    if (!query.trim()) return;
    setIsLoading(true);
    
    try {
      const data = await searchBooksAPI(query);
      setBooks(data.docs || []);
    } catch (error) {
      console.error("Error al buscar libros:", error);
      setBooks([]);
    } finally {
      setIsLoading(false);
    }
  };

  return { books, searchBooks, isLoading };
};