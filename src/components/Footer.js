import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Pokémon Insights. All rights reserved.</p>
      <p>
        Data provided by{' '}
        <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" className="footer-link">
          PokeAPI
        </a>
      </p>
    </footer>
  );
};

export default Footer;
