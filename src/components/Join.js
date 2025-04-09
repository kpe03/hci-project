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

  // State for validation errors
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Simple email validation regex
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    // Password length check
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      isValid = false;
    }

    // Password match check
    if (password !== confirmPassword) {
      // Only show confirm password error if password itself is long enough
      if (password.length >= 8) {
        setConfirmPasswordError('Passwords do not match.');
      }
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Handle successful registration logic here
      console.log('Registration submitted:', { username, email, password });
      // Add actual registration API call here
      alert('Account creation successful (simulated)!'); // Placeholder success message
    } else {
      console.log('Form validation failed');
    }
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
              {/* Display email error message */}
              {emailError && (
                <span className="error-message">{emailError}</span>
              )}
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password (min. 8 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* Display password error message */}
              {passwordError && (
                <span className="error-message">{passwordError}</span>
              )}
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
              {/* Display confirm password error message */}
              {confirmPasswordError && (
                <span className="error-message">{confirmPasswordError}</span>
              )}
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
