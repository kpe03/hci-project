import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();  // Initialize useNavigate hook

  // MOCK login functionality 
  // Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    console.log(`Attempting login for Username: ${username}`);

    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    // Call the backend API
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful!", data);
        setIsLoggedIn(true);
        navigate('/');
      } else {
        setError(data.message || 'Login failed. Please try again.');
        console.error("Login failed:", data.message);
      }
    } catch (err) {
      console.error('Network or server error during login:', err);
      setError('Failed to connect to the server. Please try again later.');
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

            {/* Display login error message */}
            {error && (
              <p className="error-message" style={{ textAlign: 'center', marginBottom: '15px' }}>
                {error}
              </p>
            )}

            <Link to='/profile'>
              <button type="submit" className="sign-in-button">
                SIGN IN
              </button>
            </Link>
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
