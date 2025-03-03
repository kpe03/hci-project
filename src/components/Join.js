import React from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
  return (
    <div className="join-page">
      <div className="breadcrumb">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </Link>{' '}
        {`> Join`}
      </div>
    </div>
  );
};

export default Join;
