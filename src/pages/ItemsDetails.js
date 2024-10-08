import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemDetails } from '../services/itemApiService';
import '../css/ItemsDetails.css';
import Spinner from '../components/Spinner';

const ItemsDetails = () => {
  const { itemName } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getItemDetails(itemName);
        setItemDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error when fetching item details.', error);
      }
    };

    fetchDetails();
  }, [itemName]);

  if (loading) {
    return <Spinner />;
  }

  // Função para obter o nome em inglês
  const getItemNameInEnglish = () => {
    const englishNameEntry = itemDetails.names.find(name => name.language.name === 'en');
    return englishNameEntry ? englishNameEntry.name : itemDetails.names[0].name; // fallback para o primeiro nome se não houver entrada em inglês
  };

  return (
    <div className="item-details-container">
      {/* Header section with item image and basic info */}
      <div className="item-header">
        <h2 className="item-name">{getItemNameInEnglish()}</h2>
        <img
          src={itemDetails.sprites.default}
          alt={getItemNameInEnglish()}
          className="item-image"
        />
        <div className="item-basic-info">
          <p><strong>Cost:</strong> {itemDetails.cost} Poké Dollars</p>
          <p><strong>Fling Power:</strong> {itemDetails.fling_power || 'N/A'}</p>
          <p><strong>Category:</strong> {itemDetails.category.name}</p>
        </div>
      </div>

      {/* Effect Entries */}
      <div className="item-effect-entries">
        <h3>Effect</h3>
        <p>{itemDetails.effect_entries[0]?.short_effect || 'No effect available.'}</p>
        <p>{itemDetails.effect_entries[0]?.effect || 'No detailed effect available.'}</p>
      </div>

      {/* Flavor Text */}
      <div className="item-flavor-text-section">
        <h3>Flavor Text</h3>
        <p>{itemDetails.flavor_text_entries[0]?.text || 'No flavor text available.'}</p>
      </div>

      {/* Held By Pokémon */}
      <div className="item-held-by-section">
        <h3>Held By Pokémon</h3>
        <ul>
          {itemDetails.held_by_pokemon.length > 0 ? (
            itemDetails.held_by_pokemon.map((held) => (
              <li key={held.pokemon.name}>
                {held.pokemon.name} (Rarity: {held.version_details[0].rarity})
              </li>
            ))
          ) : (
            <li>No Pokémon hold this item.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ItemsDetails;
