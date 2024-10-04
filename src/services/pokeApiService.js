import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon?limit=150`);
    return response.data.results;
  } catch (error) {
    console.error('Error when searching list of Pokémon', error);
    throw error;
  }
};

export const getPokemonDetails = async (pokemonName) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error(`Error when searching for details of Pokémon ${pokemonName}`, error);
    throw error;
  }
};
