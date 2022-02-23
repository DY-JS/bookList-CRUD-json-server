import { useState, useEffect, useContext } from "react";
import { BooksContext } from "../BooksContext";
import { useNavigate } from "react-router-dom";

import Form from "../Form";

const AddNewBookForm = () => {
  const { books, setBooks, setIsLoading, setError } = useContext(BooksContext);

  const [resultMessage, setResultMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (newBook) => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:3001/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
      });
      if (!res.ok) {
        throw new Error(`${res.status}-${res.statusText} Can't add`);
      } else {
        setBooks(books.push(newBook));
        setIsLoading(false);
        setResultMessage("Successfully added");
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
        title="Add Book"
        buttonTitle="Add Book"
        onSubmit={onSubmit}
        initialInputs={{
          title: "",
          author: "",
          category: "",
          ISBN: "",
        }}
      />
    </>
  );
};

export default AddNewBookForm;
