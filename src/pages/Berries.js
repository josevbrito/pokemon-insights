import React, { useEffect, useState } from "react";
import { getBerriesList } from '../services/berryApiService';
import CardBerry from "../components/CardBerry";
import Spinner from '../components/Spinner';
import '../css/Berries.css';

const Berries = () => {
    const [berriesList, setBerriesList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchBerry = async () => {
            try {
                const data = await getBerriesList();
                setBerriesList(data);
                setLoading(false);
            } catch (e) {
                console.error('Error loading berries list.', e);
            }
        };

        fetchBerry();
    }, []);

    if (loading) {
        return <Spinner />;
    }

    // Search
    const filteredBerryList = berriesList.filter((berry) => {
        return (
            berry.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Search by name
            berry.id.toString().includes(searchTerm) // Search by ID
        );
    });

    return (
        <div className="berry-container">
            <h2>Berries</h2>

            {/* SEARCH */}
            <input
                type="text"
                placeholder="Search by ID or Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            {/* CARDS */}
            <div className="berries-grid">
                {filteredBerryList.map((berry) => (
                    <CardBerry key={berry.id} berry={berry} />
                ))}
            </div>
        </div>
    );
};

export default Berries;
