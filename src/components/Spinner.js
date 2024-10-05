import React from 'react';
import '../css/Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Loading data...</p>
    </div>
  );
};

export default Spinner;
