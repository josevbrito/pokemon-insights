import React, { useEffect, useState } from 'react';
import '../css/Types.css';

const Types = () => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type');
        if (!response.ok) {
          throw new Error('Failed to fetch types');
        }
        const data = await response.json();
        setTypes(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTypes();
  }, []);

  if (loading) return <p>Loading types...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="types-page">
      <h2>Pokémon Types</h2>
      <ul className="types-list">
        {types.map((type) => (
          <li key={type.name} className="type-item">
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Types;
