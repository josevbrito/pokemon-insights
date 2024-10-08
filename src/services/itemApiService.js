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

export const getItemsList = async () => {
    try {
      const allItems = [];
      let nextUrl = 'https://pokeapi.co/api/v2/item';
  
      while (nextUrl) {
        const response = await axios.get(nextUrl);
        allItems.push(...response.data.results);
        nextUrl = response.data.next;
      }
      return allItems;
    } catch (e) {
      console.error('Error fetching item list:', e);
    }
};
  
  

export const getItemTypes = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/item-category');
    return response.data.results.map((category) => category.name); 
  } catch (e) {
    console.error('Error fetching item types:', e);
  }
};
  
 
export const getItemsByType = async (typeUrl) => {
  try {
    const response = await axios.get(typeUrl); 
    return response.data.items;
  } catch (e) {
    console.error('Error fetching items by type:', e);
  }
};
