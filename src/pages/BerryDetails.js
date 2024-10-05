import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBerryDetails } from '../services/berryApiService';

const BerryDetails = () => {
  const { berryName } = useParams();
  const [berryDetails, setBerryDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getBerryDetails(berryName);
        setBerryDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error when fetching Pokémon details.', error);
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
      <img src={berryDetails.sprites.front_default} alt={berryDetails.name} />
      <p><strong>Altura:</strong> {berryDetails.height}</p>
      <p><strong>Peso:</strong> {berryDetails.weight}</p>
      <p><strong>Tipos:</strong> {berryDetails.types.map(type => type.type.name).join(', ')}</p>
    </div>
  );
};

export default BerryDetails;
