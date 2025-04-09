import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
  faGoogle,
  faApple,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  return (
    <div className="login-page">
      <div className="breadcrumb">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </Link>{' '}
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

            <div className="divider">
              <span>OR</span>
            </div>

            <div className="social-login-buttons">
              <button type="button" className="social-button google">
                <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
              </button>
              <button type="button" className="social-button apple">
                <FontAwesomeIcon icon={faApple} /> Sign in with Apple
              </button>
              <button type="button" className="social-button microsoft">
                <FontAwesomeIcon icon={faMicrosoft} /> Sign in with Microsoft
              </button>
            </div>

            <p>
              Don't have an account?{' '}
              <Link to="/join" className="register-link">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
