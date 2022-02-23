import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { getBooks } from "../../utils/helpers";

import BookItem from "../BookItem";
import { BooksContext } from "../BooksContext";

const Dashboard = () => {
  const {
    books,
    setBooks,
    isLoading,
    setIsLoading,
    error,
    setError,
  } = useContext(BooksContext);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getBooks()
        .then((data) => {
          setBooks(data);
          setIsLoading(false);
          setError(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }, 500);
    console.log(books, isLoading);
    return () => {
      setError(false);
    };
  }, [books.length]);

  return (
    <div className="dashboard">
      {error && <h1>{error}</h1>}
      {!error && isLoading && <h1>Loading...</h1>}
      {books.length && (
        <>
          <NavLink to="/add-book">Add Book</NavLink>
          <table>
            <thead>
              <tr>
                <td>Title</td>
                <td>Author</td>
                <td>Category</td>
                <td>ISBN</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <BookItem book={book} key={book.title + book.id} />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Dashboard;
