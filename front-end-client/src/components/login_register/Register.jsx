import React, { useState } from "react";
// import styling
import "../../stylesheets/css/Register.css";

const Register = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  return (
    //<div>Register</div>;
    <div className="register-form">
      <form className="registration">
        <input
          className="form-field"
          placeholder="First Name"
          name="firstName"
        />
        <input className="form-field" placeholder="Last Name" name="lastName" />
        <input className="form-field" placeholder="Email" name="email" />
      </form>
    </div>
  );
};

export default Register;
