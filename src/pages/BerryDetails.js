import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBerryDetails } from '../services/berryApiService';
import { getItemDetails } from '../services/itemApiService';

const BerryDetails = () => {
  const { berryName } = useParams();
  const [berryDetails, setBerryDetails] = useState(null);
  const [itemDetails, setItemDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const berryData = await getBerryDetails(berryName);
        setBerryDetails(berryData);

        const itemData = await getItemDetails(berryData.item.name);
        setItemDetails(itemData);

        setLoading(false);
      } catch (error) {
        console.error('Error when fetching Berry details.', error);
      }
    };

    fetchDetails();
  }, [berryName]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h2>{berryDetails.name}</h2>
      {itemDetails && (
        <img src={itemDetails.sprites.default} alt={berryDetails.name} />
      )}
      <p><strong>Firmness:</strong> {berryDetails.firmness.name}</p>
      <p><strong>Growth Time:</strong> {berryDetails.growth_time} hours</p>
      <p><strong>Max Harvest:</strong> {berryDetails.max_harvest} berries</p>
      <p><strong>Size:</strong> {berryDetails.size} mm</p>
    </div>
  );
};

export default BerryDetails;
