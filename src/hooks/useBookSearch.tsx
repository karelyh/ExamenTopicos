import { useState } from 'react';

export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
}

export const useBookSearch = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchBooks = async (query: string) => {
    if (!query.trim()) return;
    setIsLoading(true);
    
    try {
      const formattedQuery = query.trim().replace(/\s+/g, '+');
      // Petición de búsqueda a la API
      const response = await fetch(`https://openlibrary.org/search.json?q=${formattedQuery}`);
      const data = await response.json();
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