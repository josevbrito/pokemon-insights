import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CardItem.css';

const CardItem = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/item/${item.name}`}>
        <div className="image">
          <img src={`https://img.pokemondb.net/sprites/items/${item.name}.png`} alt={item.name} />
        </div>
        <div className="info">
          <span className="name">{item.name}</span>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
