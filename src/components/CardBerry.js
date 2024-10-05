import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Card.css';

const Card = ({ berry }) => {
  return (
    <div className="card">
      <Link to={`/berry/${berry.name}`}>
        <div className="image">
          <img src={`https://img.berrydb.net/artwork/large/${berry.name}.jpg`} alt={berry.name} />
        </div>
        <div className="info">
          <span className="number">#{berry.id}</span>
          <span className="name">{berry.name}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
