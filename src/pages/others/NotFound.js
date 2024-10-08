import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/layout/NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Oops! Page Not Found</h2>
      <p className="not-found-message">
        The page you are looking for does not exist. It may have been removed or never existed.
      </p>
      <button className="not-found-button" onClick={handleGoHome}>
        Go Back to Homepage
      </button>
    </div>
  );
};

export default NotFound;
