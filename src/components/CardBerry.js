import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CardBerry.css';

const CardBerry = ({ berry }) => {
  return (
    <div className="card-berry">
      <Link to={`/berry/${berry.name}`}>
        <div className="image">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${berry.name}-berry.png`} alt={berry.name} />
        </div>
        <div className="info">
          <span className="number">#{berry.id}</span>
          <span className="name">{berry.name}</span>
        </div>
      </Link>
    </div>
  );
};

export default CardBerry;
