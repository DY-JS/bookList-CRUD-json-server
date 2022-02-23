import { useState, useEffect, useContext } from "react";
import { BooksContext } from "../BooksContext";
import { useNavigate } from "react-router-dom";

import Form from "../Form";

const EditBookForm = () => {
  const { books, setBooks, setIsLoading, setError, selectedId } = useContext(
    BooksContext
  );

  const [resultMessage, setResultMessage] = useState("");
  const navigate = useNavigate();
  const editingBook = books.find((book) => book.id === selectedId);

  const onSubmit = async (updatetBook) => {
    const { title, author, category, ISBN } = updatetBook;
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:3001/books/${selectedId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatetBook),
      });
      if (!res.ok) {
        throw new Error(`${res.status}-${res.statusText} Can't edit`);
      } else {
        // setBooks((books) =>
        //   books.map((book) => {
        //     if (book.id === selectedId) {
        //       return { ...book, title, author, category, ISBN };
        //     }
        //     return book;
        //   })
        // );
        setIsLoading(false);
        setResultMessage("Successfully updated");
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      setResultMessage(error.message);
    }
  };

  useEffect(() => {
    return () => {
      setError(false);
    };
  }, [resultMessage]);

  return (
    <>
      {resultMessage && <h1>{resultMessage}</h1>}
      <Form
        selectedId={selectedId}
        title="Edit Book"
        buttonTitle="Edit Book"
        onSubmit={onSubmit}
        initialInputs={{
          title: editingBook?.title,
          author: editingBook?.author,
          category: editingBook?.category,
          ISBN: editingBook?.ISBN,
        }}
      />
    </>
  );
};

export default EditBookForm;
