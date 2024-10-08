import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../../services/pokeApiService';
import '../../css/pokedex/PokemonDetails.css';
import '../../css/pokedex/Types.css';
import Spinner from '../../components/Spinner';

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
    return <Spinner />;
  }

  return (
    <div className="pokemon-details-container">
      {/* Header section with Pokémon image and basic info */}
      <div className="pokemon-header">
        <h2 className="pokemon-name">{pokemonDetails.name}</h2>
        <img
          src={pokemonDetails.sprites.front_default}
          alt={pokemonDetails.name}
          className="pokemon-image"
        />
        <div className="pokemon-basic-info">
          <p><strong>Height:</strong> {pokemonDetails.height / 10} m</p>
          <p><strong>Weight:</strong> {pokemonDetails.weight / 10} kg</p>
          <p><strong>Base Experience:</strong> {pokemonDetails.base_experience}</p>
        </div>
      </div>

      {/* Type and abilities */}
      <div className="pokemon-details-section">
        <h3>Type</h3>
        <p className="pokemon-types">
          {pokemonDetails.types.map((type) => (
            <span key={type.slot} className={`type-badge type-${type.type.name}`}>
              {type.type.name}
            </span>
          ))}
        </p>

        <h3>Abilities</h3>
        <p>
          {pokemonDetails.abilities.map((ability) => (
            <span key={ability.slot} className="ability">
              {ability.ability.name}
            </span>
          ))}
        </p>
      </div>

      {/* Stats section */}
      <div className="pokemon-stats-section">
        <h3>Base Stats</h3>
        <ul className="pokemon-stats">
          {pokemonDetails.stats.map((stat) => (
            <li key={stat.stat.name}>
              <strong>{stat.stat.name.toUpperCase()}:</strong> {stat.base_stat}
              <div className="stat-bar">
                <div
                  className="stat-bar-fill"
                  style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Other sprites */}
      <div className="pokemon-sprites-section">
        <h3>Sprites</h3>
        <div className="pokemon-sprites">
          <img src={pokemonDetails.sprites.front_default} alt="Front default" />
          <img src={pokemonDetails.sprites.back_default} alt="Back default" />
          <img src={pokemonDetails.sprites.front_shiny} alt="Front shiny" />
          <img src={pokemonDetails.sprites.back_shiny} alt="Back shiny" />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
