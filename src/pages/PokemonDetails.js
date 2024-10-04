import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../services/pokeApiService';

const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getPokemonDetails(pokemonName);
        setPokemonDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error when fetching Pokémon details.', error);
      }
    };

    fetchDetails();
  }, [pokemonName]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h2>{pokemonDetails.name}</h2>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <p><strong>Altura:</strong> {pokemonDetails.height}</p>
      <p><strong>Peso:</strong> {pokemonDetails.weight}</p>
      <p><strong>Tipos:</strong> {pokemonDetails.types.map(type => type.type.name).join(', ')}</p>
    </div>
  );
};

export default PokemonDetails;
