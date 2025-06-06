import axios from 'axios'

const API_BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async (limit: number, offset: number) => {
  return await axios.get(`${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
};

export const getPokemonDetails = async (name: string) => {
  return await axios.get(`${API_BASE_URL}/pokemon/${name}`);
};

export const getPokemonTypes = async () => {
  return await axios.get(`${API_BASE_URL}/type`);
};

export const getPokemonGenerations = async () => {
  return await axios.get(`${API_BASE_URL}/generation`);
};

export const getPokemonByGeneration = async (generationId: number) => {
  return await axios.get(`${API_BASE_URL}/generation/${generationId}`);
};

export const getPokemonImage = (url: string): string => {
  const parts = url.split('/');
  const id = parts[parts.length - 2];
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

export const getPokemonNumber = (url: string): string => {
  const parts = url.split('/');
  return parts[parts.length - 2].padStart(3, '0');
};

export const formatPokemonName = (name: string): string => {
  if (name === 'nidoran-f') return 'Nidoran ♀';
  if (name === 'nidoran-m') return 'Nidoran ♂';
  if (name === 'mr-mime') return 'Mr. Mime';
  if (name === 'farfetchd') return 'Farfetch\'d';
  if (name === 'mime-jr') return 'Mime Jr.';
  if (name === 'porygon-z') return 'Porygon-Z';
  if (name === 'flabebe') return 'Flabébé';
  if (name === 'type-null') return 'Type: Null';
  if (name === 'tapu-koko') return 'Tapu Koko';
  if (name === 'tapu-lele') return 'Tapu Lele';
  if (name === 'tapu-fini') return 'Tapu Fini';
  if (name === 'tapu-bulu') return 'Tapu Bulu';
  if (name.includes('-totem')) return name.replace('-totem', ' Totem').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  if (name.includes('-alola')) return name.replace('-alola', ' (Alola)').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  if (name.includes('-galar')) return name.replace('-galar', ' (Galar)').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  if (name.includes('-hisui')) return name.replace('-hisui', ' (Hisui)').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  if (name.includes('-mega')) return name.replace('-mega', ' Mega').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  if (name.includes('-gmax')) return name.replace('-gmax', ' G-Max').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  if (name.includes('-eiscue')) return name.replace('-eiscue', '').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + ' Eiscue';
  if (name.includes('-f')) return name.replace('-f', ' ♀');
  if (name.includes('-m')) return name.replace('-m', ' ♂');

  return name.split('-')
             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
             .join(' ');
};

export const getPokemonSpeciesDetails = async (id: number) => {
  return await axios.get(`${API_BASE_URL}/pokemon-species/${id}`);
};

export const getEvolutionChain = async (url: string) => {
  return await axios.get(url);
};

export const getPokemonImageByUrl = (url: string): string => {
  const parts = url.split('/');
  const id = parts[parts.length - 2];
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

export const getPokemonImage2 = (id: number | string): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};
