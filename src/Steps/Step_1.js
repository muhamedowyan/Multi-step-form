import { useState, useContext } from "react";
import { validateInput } from "../Validation";
import { FormContext } from "./FormContext";

export default function GetPersonalInfo() {
  const { currentPage, setCurrentPage, formInput, setFormInput } = useContext(FormContext);

  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    phoneNumber: ""
  });

  const isActive = formInput.name !== "" || formInput.email !== "" || formInput.phoneNumber !== "";

  function handleSubmit(event) {
    event.preventDefault();
    const { error, valid } = validateInput(formInput);
    setErrorMessage(error);
    if (valid) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <form noValidate="novalidate" className="step-form">
      <div className="formTitle">
        <h1>Personal info</h1>
        <p className="step-about">Please provide your name, email address, and phone number.</p>
      </div>

      <label>
        <span>Name</span>
        <p className="error-message">{errorMessage.name}</p>
      </label>
      <input
        id="name"
        type="text"
        placeholder="e.g. Stephen King"
        value={formInput.name}
        onChange={(event) => {
          setFormInput({ ...formInput, name: event.target.value });
        }}
        className={errorMessage.name ? "error" : ""}
      />

      <label>
        <span>Email Address</span>
        <p className="error-message">{errorMessage.email}</p>
      </label>
      <input
        id="email"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        value={formInput.email}
        onChange={(event) => {
          setFormInput({ ...formInput, email: event.target.value });
        }}
        className={errorMessage.email && !/\S+@\S+\.\S+/.test(formInput.email) ? "error" : ""}
      />

      <label>
        <span>Phone Number</span>
        <p className="error-message">{errorMessage.phoneNumber}</p>
      </label>
      <input
        type="tel"
        placeholder="e.g. +1 234 567 890"
        value={formInput.phoneNumber}
        onChange={(event) => {
          setFormInput({ ...formInput, phoneNumber: event.target.value });
        }}
        className={errorMessage.phoneNumber && !/^\+?\d{10,15}$/.test(formInput.phoneNumber) ? "error" : ""}
      />
      <div className="navigation-buttons">
        <button
          type="submit"
          disabled={!isActive}
          className={isActive ? "activeButton" : ""}
          onClick={handleSubmit}
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
