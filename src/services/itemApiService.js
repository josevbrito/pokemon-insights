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
  const allTypes = [];
  let nextUrl = 'https://pokeapi.co/api/v2/item-category'; 

  try {
    while (nextUrl) {
      const response = await axios.get(nextUrl);
      const types = response.data.results;

      for (const type of types) {
        const typeDetails = await axios.get(type.url);
        const niceName = typeDetails.data.names.find(nameObj => nameObj.language.name === 'en')?.name || type.name;

        allTypes.push({
          name: type.name,
          niceName,
          url: type.url
        });
      }

      nextUrl = response.data.next;
    }

    allTypes.sort((a, b) => a.niceName.localeCompare(b.niceName));

    return allTypes;
  } catch (e) {
    console.error('Error fetching item types:', e);
    throw e;
  }
};


export const getItemsByType = async (typeUrl) => {
  try {
    const response = await axios.get(typeUrl); 
    const categoryData = response.data;
    const niceName = categoryData.names.find(nameObj => nameObj.language.name === 'en')?.name || categoryData.name;

    return {
      items: categoryData.items,
      niceName: niceName
    };
  } catch (e) {
    console.error('Error fetching items by type:', e);
    throw e;
  }
};
