import React from 'react';
import { Link } from 'react-router-dom';
import acmLogo from '../assets/images/acm-logo.png';
import './Join.css';

const Join = () => {
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
            <h2 className="join-acm-text">Join ACM</h2>
          </div>
          <div className="input-group" />
        </div>
      </div>
    </div>
  );
};

export default Join;
