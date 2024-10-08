import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Pokedex from './pages/pokedex/Pokedex';
import Items from './pages/item/Items';
import PokemonDetails from './pages/pokedex/PokemonDetails';
import ItemsDetails from './pages/item/ItemsDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/items" element={<Items />} />
            <Route path="/item/:itemName" element={<ItemsDetails />} />
            <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
