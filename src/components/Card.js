import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Card.css';

const Card = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${pokemon.name}`}>
        <div className="pokemon-image">
          <img src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} alt={pokemon.name} />
        </div>
        <div className="pokemon-info">
          <span className="pokemon-number">#{pokemon.id}</span>
          <span className="pokemon-name">{pokemon.name}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
