import { useContext } from "react";
import { BooksContext } from "../BooksContext";
import { handleDelete } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

const BookItem = ({ book }) => {
  const { id, title, author, category, ISBN } = book;
  const { books, setBooks, setError, setSelectedId } = useContext(BooksContext);
  const navigate = useNavigate();

  const onDelete = () => {
    setError(false);
    handleDelete(id)
      .then(setBooks(books.filter((book) => book.id !== id)))
      .catch((error) => {
        setError(error.message);
      });
  };

  const onSelect = () => {
    setSelectedId(id);
    navigate("/edit-book");
  };

  return (
    book && (
      <tr>
        <td>{title}</td>
        <td>{author}</td>
        <td>{category}</td>
        <td>{ISBN}</td>
        <td>
          <button onClick={onDelete}>Delete</button>
          <button onClick={onSelect}>Edit</button>
        </td>
      </tr>
    )
  );
};

export default BookItem;
