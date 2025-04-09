import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import acmLogo from '../assets/images/acm-logo.png';
import './Join.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faApple,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';

const Join = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic here
    console.log('Registration submitted:', { username, email, password });
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Add actual registration API call here
  };

  return (
    <div className="join-page">
      <div className="breadcrumb">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </Link>{' '}
        {`> Join`}
        <span className="breadcrumb-note"></span>
      </div>

      <div className="join-container">
        <div className="join-box">
          <div className="acm-logo-container">
            <img src={acmLogo} alt="ACM Logo" className="acm-logo" />
            <h2 className="join-acm-text">Join ACM / Create Account</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="create-account-button">
              CREATE ACCOUNT
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <div className="social-login-buttons">
              <button type="button" className="social-button google">
                <FontAwesomeIcon icon={faGoogle} /> Sign up with Google
              </button>
              <button type="button" className="social-button apple">
                <FontAwesomeIcon icon={faApple} /> Sign up with Apple
              </button>
              <button type="button" className="social-button microsoft">
                <FontAwesomeIcon icon={faMicrosoft} /> Sign up with Microsoft
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
