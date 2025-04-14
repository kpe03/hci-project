import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Import the CSS

function ForgotPasswordPage() {
  return (
    // Add container and box classes
    <div className="login-page">
      <div className="forgot-container">
        <div className="login-box">
          <h1>Forgot Password</h1>
          <p>Please enter your email address to reset your password.</p>
          <form>
            {/* Use input-group class for consistency */}
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            {/* Use sign-in-button class for consistency */}
            <button type="submit" className="sign-in-button">Submit</button>
          </form>
          <br />
          {/* Use register-link style for back link */}
          <Link to="/login" className="register-link">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage; 