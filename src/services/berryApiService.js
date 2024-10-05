import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

// berries list (cards)
export const getBerriesList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/berry`);
        const berriesData = response.data.results;

        const berriesDetailsPromises = berriesData.map(async (berry) => {
            const detailsResponse = await axios.get(berry.url);
            
            const itemResponse = await axios.get(detailsResponse.data.item.url);

            return {
                id: detailsResponse.data.id,
                name: detailsResponse.data.name,
                image: itemResponse.data.sprites.default,
            };
        });

        return Promise.all(berriesDetailsPromises);
    } catch (e) {
        console.error('Error when searching list of berries', e);
        throw e;
    }
};



// berry details for the page (berry details)
export const getBerryDetails = async (berryName) => {
    try {
      const response = await axios.get(`${BASE_URL}/berry/${berryName}`);
      
      return response.data;
  
    } catch (e) {
      console.error(`Error when searching for details of berries ${berryName}`, e);
      throw e;
    }
  };
  