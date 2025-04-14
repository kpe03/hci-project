import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import acmLogo from '../assets/images/acm-logo.png';
import './Join.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Join = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  // State for validation errors
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRegistrationError('');

    if (validateForm()) {
      console.log('Form validated, attempting registration for:', username);
      // Add actual registration API call here
      try {
        const response = await fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // Send username and password to backend
          body: JSON.stringify({ username, password }), 
        });

        const data = await response.json(); // Try to parse JSON response

        if (response.status === 201) { // Check for 201 Created status
          console.log('Registration successful:', data.message);
          // Optionally show a success message to the user
          alert('Account created successfully! Please log in.'); 
          navigate('/login'); // Navigate to login page on success
        } else {
          // Handle errors from the server (e.g., username exists)
          setRegistrationError(data.message || 'Registration failed. Please try again.');
          console.error('Registration failed:', data.message);
        }
      } catch (err) {
        // Handle network errors
        console.error('Network or server error during registration:', err);
        setRegistrationError('Failed to connect to the server. Please try again later.');
      }

    } else {
      console.log('Form validation failed');
      // Validation errors are already displayed via state variables (emailError, etc.)
    }
  };

  return (
    <div className="join-page">
      <div className="join-container">
        <div className="join-box">
          <div className="acm-logo-container">
            <img src={acmLogo} alt="ACM Logo" className="acm-logo" />
            <h2 className="join-acm-text">Create An Account</h2>
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
            {/* Display general registration error */}
            {registrationError && (
              <p className="error-message" style={{ textAlign: 'center', marginTop: '10px' }}>
                {registrationError}
              </p>
            )}
            <button type="submit" className="create-account-button">
              CREATE ACCOUNT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
