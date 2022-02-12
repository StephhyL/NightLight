import React, { useState } from "react";
// import styling
import "../../stylesheets/css/Register.css";

const Register = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    avatar: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInput = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInput = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handlePasswordInput = (event) => {
    setValues({ ...values, password: event.target.value });
  };

  const handleEmailInput = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleAvatarInput = (event) => {
    setValues({ ...values, avatar: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="title">
      Register
      <br></br>
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmitForm}>
          {submitted & valid ? (
            <div className="register-success"> Thank you for registering! </div>
          ) : null}
          <br></br>
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
          <br></br>
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
          <br></br>
          <input
            values={values.password}
            onChange={handlePasswordInput}
            className="form-field"
            placeholder="Password"
            name="Password"
          />
          {submitted && !values.password ? (
            <span> Please enter your password </span>
          ) : null}
          <br></br>
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
          <br></br>
          <input
            values={values.avatar}
            onChange={handleAvatarInput}
            className="form-field"
            placeholder="Profile Photo"
            name="Profile Photo"
          />
          {submitted && !values.avatar ? (
            <span> Please select a profile photo </span>
          ) : null}
          <br></br>
          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
