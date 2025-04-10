import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
  faGoogle,
  faApple,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();  // Initialize useNavigate hook

  // MOCK login functionality 
  // Login
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    // Mock authentication - in a real app, you would call an API
    if (username === 'user' && password === 'password') {
      console.log("Logged in!");
      setIsLoggedIn(true);

      //navigate to home with logged in status true
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  // Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h2>
            <FontAwesomeIcon icon={faUser} /> Sign into your ACM Account
          </h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Username</label>
              <input type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
              <a href="/forgot-username" className="forgot-link">
                Forgot username?
              </a>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
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
