import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';


// pokemon details for the list (cards)
export const getPokemonList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon?limit=151`); // limiting to the first generation
    const pokemonNames = response.data.results;

    const pokemonDetailsPromises = pokemonNames.map(async (pokemon) => {
      const detailsResponse = await axios.get(pokemon.url);
      return {
        id: detailsResponse.data.id,
        name: detailsResponse.data.name,
        image: detailsResponse.data.sprites.front_default,
      };
    });

    return Promise.all(pokemonDetailsPromises);

  } catch (error) {
    console.error('Error when searching list of Pokémon', error);
    throw error;
  }
};

// pokemon details for the page (pokemon details)
export const getPokemonDetails = async (pokemonName) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${pokemonName}`);
    
    return response.data;

  } catch (error) {
    console.error(`Error when searching for details of Pokémon ${pokemonName}`, error);
    throw error;
  }
};
