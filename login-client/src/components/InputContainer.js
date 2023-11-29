import React from 'react';
import "./Login/Login.css"

const InputContainer = ({ email, password, setEmail, setPassword, renderErrorMsg, handleSubmit, buttonText }) => {
  return (
    <div className="inputs_container">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {renderErrorMsg("username")}
      {renderErrorMsg("noUsername")}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {renderErrorMsg("password")}
      {renderErrorMsg("noPassword")}
      <button className="login_button" onClick={handleSubmit}>{buttonText}</button>
    </div>
  );
};

export default InputContainer;
