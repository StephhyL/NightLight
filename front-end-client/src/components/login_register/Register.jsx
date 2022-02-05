import React, { useState } from "react";
// import styling
import "../../stylesheets/css/register.css";

const Register = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFirstNameInput = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInput = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmailInput = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  return (
    <div>
      Register
      <div className="form-container">
        <form className="register-form">
          <input
            values={values.firstName}
            onChange={handleFirstNameInput}
            className="form-field"
            placeholder="First Name"
            name="firstName"
          />
          <input
            values={values.lastName}
            onChange={handleLastNameInput}
            className="form-field"
            placeholder="Last Name"
            name="last Name"
          />
          <input
            values={values.email}
            onChange={handleEmailInput}
            className="form-field"
            placeholder="Email"
            name="email"
          />
          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
