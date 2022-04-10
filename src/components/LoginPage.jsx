import { useState } from "react";

const LoginPage = ({ onLogin }) => {
  const [formData, setFromData] = useState({});

  const handleChange = (evt) => {
    setFromData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(formData);
  };

  return (
    <div className="auth-page">
      <form className="form-auth" onSubmit={handleSubmit}>
        <h1 className="form-auth__header">Sign in</h1>
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
        <button type="submit" className="todolist-form_submit">
          Sign in
        </button>
        <p className="auth-page_link">
          Not a member yet?
          <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
