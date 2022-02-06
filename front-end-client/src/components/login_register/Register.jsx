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
  };

  return (
    <div>
      Register
      <div className="form-container">
        <form className="register-form">
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
          <span id="first-name-error"> Please enter a first name </span>
          <input
            values={values.lastName}
            onChange={handleLastNameInput}
            className="form-field"
            placeholder="Last Name"
            name="last Name"
          />
          <span id="last-name-error"> Please enter a last name </span>
          <input
            values={values.email}
            onChange={handleEmailInput}
            className="form-field"
            placeholder="Email"
            name="email"
          />
          <span id="email-error"> Please enter a valid email address </span>
          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
