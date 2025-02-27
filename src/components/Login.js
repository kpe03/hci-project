import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <div className="login-page">
      <div className="breadcrumb">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Home
        </Link>{" "}
        {`> Log In`}
        <span className="breadcrumb-note"></span>
      </div>

      <div className="login-container">
        <div className="login-box">
          <h2>
            <FontAwesomeIcon icon={faUser} /> Sign into your ACM Account
          </h2>
          <form>
            <div className="input-group">
              <label>Username</label>
              <input type="text" placeholder="Username" />
              <a href="/forgot-username" className="forgot-link">
                Forgot username?
              </a>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Password" />
              <div className="password-options">
                <div className="remember-me">
                  <input type="checkbox" />
                  <label>Remember me</label>
                </div>
                <a href="/forgot-password" className="forgot-link">
                  Forgot password?
                </a>
              </div>
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
