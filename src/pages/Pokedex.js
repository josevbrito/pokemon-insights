import React, { useEffect, useState } from 'react';
import { getPokemonList } from '../services/pokeApiService';
import Card from '../components/CardPokemon';
import '../css/Pokedex.css';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
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

  // Search
  const filteredPokemonList = pokemonList.filter((pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Search by name
      pokemon.id.toString().includes(searchTerm) // Search by ID
    );
  });

  return (
    <div className="pokedex-container">
      <h2>Pokédex</h2>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search by ID or Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* CARDS */}
      <div className="pokemon-grid">
        {filteredPokemonList.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

    </div>
  );
};

export default Pokedex;
