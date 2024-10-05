import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getItemDetails = async (itemName) => {
  try {
    const response = await axios.get(`${BASE_URL}/item/${itemName}`);
    return response.data;
  } catch (e) {
    console.error(`Error when fetching item details for ${itemName}`, e);
    throw e;
  }
};
