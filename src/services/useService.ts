import type { BookSearchResponse } from '../types/booksTypes';

const API_URL = 'https://openlibrary.org/search.json';

export const searchBooksAPI = async (query: string): Promise<BookSearchResponse> => {
  const formattedQuery = query.trim().replace(/\s+/g, '+');
  
  // Petición de búsqueda a la API[cite: 1]
  const response = await fetch(`${API_URL}?q=${formattedQuery}`);
  
  if (!response.ok) {
    throw new Error('Error al conectar con Open Library');
  }
  
  return response.json();
};