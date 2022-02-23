import { createContext, useState, useMemo } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const value = useMemo(
    () => ({
      books,
      setBooks,
      selectedId,
      setSelectedId,
      isLoading,
      setIsLoading,
      error,
      setError,
    }),
    [books, selectedId, isLoading, error]
  );

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};
