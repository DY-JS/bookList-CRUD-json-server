import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import arrow from "../../utils/pictures/arrow-back.svg";
// import "./Form.scss";
const Form = ({ selectedId, title, buttonTitle, onSubmit, initialInputs }) => {
  const [inputs, setInputs] = useState(initialInputs);
  const [valid, setValid] = useState(true);

  // useEffect(() => {
  //   if (Object.values(inputs).every((input) => input.trim().length > 0))
  //     setValid(true);
  // }, [inputs, valid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(inputs).every((input) => input.trim() !== "")) {
      onSubmit(inputs);
    } else {
      setValid(false);
    }
    setInputs({
      title: "",
      author: "",
      category: "",
      ISBN: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  return (
    <div className="login">
      <div>
        <NavLink to="/">
          <img src={arrow} alt="back-link" />
          Back To Dashboard
        </NavLink>
      </div>
      <p className="login__central-text">{title}</p>
      <form onSubmit={handleSubmit} className="login__form-wrapper">
        <div className="login__input-item">
          <label htmlFor="email" className="auth-input__label">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            // required
            onChange={handleInputChange}
            value={inputs.title}
            className="auth-input"
            // disabled={loginLoading}
          />
        </div>
        {!valid && (
          <p className="auth-error-message">Fields will not be empty</p>
        )}
        <div className="login__input-item">
          <label htmlFor="email" className="auth-input__label">
            Author
          </label>
          <input
            id="author"
            name="author"
            type="text"
            // required
            onChange={handleInputChange}
            value={inputs.author}
            className="auth-input"
          />
        </div>
        <div className="login__input-item">
          <label htmlFor="select" className="auth-input__label">
            Category
          </label>
          <select
            id="select"
            name="category"
            // required
            onChange={handleInputChange}
            value={inputs.category}
            className="auth-input"
          >
            <option key={"novel"} value="novel">
              Novel
            </option>
            <option key={"advise"} value="advise">
              advise
            </option>
          </select>
        </div>

        <div className="login__input-item">
          <label htmlFor="email" className="auth-input__label">
            ISBN
          </label>
          <input
            id="ISBN"
            name="ISBN"
            type="text"
            // required
            onChange={handleInputChange}
            value={inputs.ISBN}
            className="auth-input"
          />
        </div>
        <button
          type="submit"
          className="auth-button"
          //  disabled={loginLoading}
        >
          {buttonTitle}
        </button>
      </form>
      {!valid && <p className="auth-error-message">Fields will not be empty</p>}
    </div>
  );
};

export default Form;
