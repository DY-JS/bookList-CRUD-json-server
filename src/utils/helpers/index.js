// import { useContext, useEffect } from "react";
// const { books, setBooks, error, setError } = useContext(BooksContext);

const API_URL = "http://localhost:3001/books";

export const getBooks = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(`${res.status}-${res.statusText}`);
  }
  return res.json();
};

export const handleDelete = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error(`${res.status}-${res.statusText} Can't delete`);
  }
};

// export const handleAddBook = async (newBook) => {
//   const res = await fetch(`${API_URL}`, {
//     method: "POST",
//     body: JSON.stringify(newBook),
//   });
//   if (!res.ok) {
//     throw new Error(`${res.status}-${res.statusText} Can't delete`);
//   }
// };
