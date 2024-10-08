import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getItemDetails } from '../services/itemApiService'; 
import '../css/CardItem.css';

const CardItem = ({ item }) => {
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const details = await getItemDetails(item.name);
        setItemDetails(details);
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
    };

    fetchItemDetails();
  }, [item.name]);

  if (!itemDetails) {
    return null;
  }

  const getItemNameInEnglish = () => {
    if (itemDetails.names && itemDetails.names.length > 0) {
      const englishNameEntry = itemDetails.names.find(name => name.language.name === 'en');
      return englishNameEntry ? englishNameEntry.name : itemDetails.names[0].name;
    }
    return item.name;
  };

  return (
    <div className="card">
      <Link to={`/item/${item.name}`}>
        <div className="image">
          <img src={itemDetails.sprites.default} alt={getItemNameInEnglish()} /> 
        </div>
        <div className="info">
          <span className="name">{getItemNameInEnglish()}</span> 
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
