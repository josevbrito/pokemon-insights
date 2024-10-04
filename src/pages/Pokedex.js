import React, { useEffect, useState } from 'react';
import { getPokemonList } from '../services/pokeApiService';
import { Link } from 'react-router-dom';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    {/* Pokemon List*/}
    const fetchPokemon = async () => {
      try {
        const data = await getPokemonList();
        setPokemonList(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading Pokémon list.', error);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Pokédex</h2>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
