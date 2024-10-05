import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Berries from './pages/Berries';
import Types from './pages/Types';
import Items from './pages/Items';
import PokemonDetails from './pages/PokemonDetails';
import BerryDetails from './pages/BerryDetails';
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
            <Route path="/berries" element={<Berries />} />
            <Route path="/types" element={<Types />} />
            <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
            <Route path="/berry/:berryName" element={<BerryDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
