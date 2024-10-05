import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Card.css';

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <Link to={`/pokemon/${pokemon.name}`}>
        <div className="image">
          <img src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} alt={pokemon.name} />
        </div>
        <div className="info">
          <span className="number">#{pokemon.id}</span>
          <span className="name">{pokemon.name}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
