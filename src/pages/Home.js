import React from 'react';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to Pokémon Insights!</h2>
      <p>Explore detailed statistics and information about your favorite Pokémon.</p>
      <div className="quick-links">
        <a href="/pokedex" className="home-link">Go to Pokédex</a>
        <a href="/types" className="home-link">Explore Types</a>
      </div>
    </div>
  );
};

export default Home;
