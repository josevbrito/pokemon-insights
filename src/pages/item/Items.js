import React, { useEffect, useState } from 'react';
import { getItemTypes, getItemsByType } from '../../services/itemApiService';
import CardItem from '../../components/CardItem';
import Spinner from '../../components/Spinner';
import '../../css/item/Items.css';

const Items = () => {
  const [itemList, setItemList] = useState([]);
  const [selectedNiceName, setSelectedNiceName] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemTypes, setItemTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    const fetchItemTypes = async () => {
      try {
        const types = await getItemTypes();
        setItemTypes(types);
      } catch (e) {
        console.error('Error loading item types.', e);
      }
    };

    fetchItemTypes();
  }, []);

  const handleTypeFilter = async (typeUrl) => {
    setSelectedType(typeUrl);
    setLoading(true);

    try {
      const { items, niceName } = await getItemsByType(typeUrl);
      setItemList(items);
      setSelectedNiceName(niceName);
    } catch (e) {
      console.error('Error loading items by type.', e);
    }

    setLoading(false);
  };

  // Filter items by name or by selected type
  const filteredItemList = itemList.filter((item) => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderItems = () => {
    if (loading) {
      return <Spinner />;
    }
  
    if (filteredItemList.length > 0) {
      return filteredItemList.map((item) => (
        <CardItem key={item.name} item={item} />
      ));
    }
  
    if (selectedType) {
      return <p>No items found for this category.</p>;
    }
  
    return <p>Select a category to view items.</p>;
  };
  

  return (
    <div className="items-container">
      <h2>{selectedNiceName || 'Items'}</h2>

      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        disabled={!itemList.length}
      />

      {/* Botões de filtro de categorias */}
      <div className="filter-buttons">
        {itemTypes.map((type) => (
          <button key={type.url} onClick={() => handleTypeFilter(type.url)}>
            {type.niceName || type.name}
          </button>
        ))}
        {selectedType && (
          <button onClick={() => {
            setItemList([]);
            setSelectedType(null);
            setSelectedNiceName('');
          }}>
            All Items
          </button>
        )}
      </div>

      {loading ? (
        <Spinner />
      ) : (
      <div className="items-grid">
        {renderItems()}
      </div>
      )}
    </div>
  );
};

export default Items;
