import { useState } from "react";

const RegisterPage = ({ onRegister }) => {
  const [formData, setFromData] = useState({});

  const handleChange = (evt) => {
    setFromData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(formData);
  };

  return (
    <div className="auth-page">
      <form className="form-auth" onSubmit={handleSubmit}>
        <h1 className="form-auth__header">Sign up</h1>
        {/*Needs correcting: For input fields intended for email use the appropriate type: type = "email".
         You can read about other types of input here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input*/}
        <input
          name="email"
          type="text"
          className="form-auth_input"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="text"
          className="form-auth_input"
          placeholder="Enter password"
          onChange={handleChange}
          minlength={6}
          maxlength={20}
          required
        />
        <button type="submit" className="form-auth_submit">
          Sign up
        </button>
        <p className="auth-page_link">
          Already a member?
          <a href="/signin">Log in</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
