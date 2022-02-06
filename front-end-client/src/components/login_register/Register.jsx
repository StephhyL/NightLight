import React, { useState } from "react";
// import styling
import "../../stylesheets/css/register.css";

const Register = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInput = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInput = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmailInput = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      Register
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmitForm}>
          {submitted ? (
            <div className="register-success"> Thank you for registering! </div>
          ) : null}
          <input
            values={values.firstName}
            onChange={handleFirstNameInput}
            className="form-field"
            placeholder="First Name"
            name="firstName"
          />
          {submitted && !values.firstName ? (
            <span> Please enter a first name </span>
          ) : null}
          <input
            values={values.lastName}
            onChange={handleLastNameInput}
            className="form-field"
            placeholder="Last Name"
            name="last Name"
          />
          {submitted && !values.lastName ? (
            <span> Please enter a last name </span>
          ) : null}
          <input
            values={values.email}
            onChange={handleEmailInput}
            className="form-field"
            placeholder="Email"
            name="email"
          />
          {submitted && !values.email ? (
            <span> Please enter a valid email address </span>
          ) : null}
          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
