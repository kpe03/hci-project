import React, { useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submission form
    console.log("Login attempted with:", { username, password, rememberMe });
  };

  return (
    <div className="login-page">
      <div className="breadcrumb">
        {`Home > Log In`}
        <span className="breadcrumb-note"></span>
      </div>

      <div className="login-container">
        <div className="login-box">
          <h2>
            <FontAwesomeIcon icon={faUser} /> Sign into your ACM Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              <a href="/forgot-username" className="forgot-link">
                Forgot username
              </a>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <a href="/forgot-password" className="forgot-link">
                Forgot password
              </a>
            </div>

            <div className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label>Remember me</label>
            </div>

            <button type="submit" className="sign-in-button">
              SIGN IN
            </button>
            <p>
              Don't have an account?{" "}
              <a href="/register" className="register-link">
                Register here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
