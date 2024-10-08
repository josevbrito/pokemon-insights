import React from 'react';
import '../../css/home/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to Pokémon Insights!</h2>
      <p>Explore detailed statistics and information about your favorite Pokémon.</p>
      <div className="quick-links">
        <a href="/pokedex" className="home-link">Go to Pokédex</a>
      </div>
    </div>
  );
};

export default Home;
