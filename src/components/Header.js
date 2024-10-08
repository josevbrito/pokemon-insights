import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/layout/Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* logo */}
      <div className="logo">
        <NavLink to="/" className="nav-logo">
          <h1>Pokemon Insights</h1>
        </NavLink>
      </div>

      {/* pages*/}
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pokedex" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Pokédex
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/items" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Items
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
