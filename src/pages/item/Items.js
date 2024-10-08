import React, { useEffect, useState } from 'react';
import { getItemsList, getItemTypes, getItemsByType } from '../../services/itemApiService';
import CardItem from '../../components/CardItem';
import Spinner from '../../components/Spinner';
import '../../css/item/Items.css';

const Items = () => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemTypes, setItemTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItemsList();
        setItemList(data);
        setLoading(false);
      } catch (e) {
        console.error('Error loading item list.', e);
      }
    };

    const fetchItemTypes = async () => {
      try {
        const types = await getItemTypes();
        setItemTypes(types);
      } catch (e) {
        console.error('Error loading item types.', e);
      }
    };

    fetchItems();
    fetchItemTypes();
  }, []);

  const handleTypeFilter = async (type) => {
    setSelectedType(type);
    try {
      const items = await getItemsByType(`https://pokeapi.co/api/v2/item-category/${type}`);
      setItemList(items);
    } catch (e) {
      console.error('Error loading items by type.', e);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  // Filter items by name or by selected type
  const filteredItemList = itemList.filter((item) => {
    const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType ? item.type === selectedType : true;
    return matchesSearchTerm && matchesType;
  });

  return (
    <div className="items-container">
      <h2>Items</h2>

      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Filter buttons for item types */}
      <div className="filter-buttons">
        {itemTypes.map((type) => (
          <button key={type} onClick={() => handleTypeFilter(type)}>
            {type}
          </button>
        ))}
        <button onClick={() => handleTypeFilter(null)}>All Items</button> {/* Reset filter */}
      </div>

      <div className="items-grid">
        {filteredItemList.map((item) => (
          <CardItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Items;
