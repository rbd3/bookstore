import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header className="navbar">
    <h1 className="header">Bookstore CMS</h1>
    <ul className="links">
      <li>
        <NavLink to="/" className="link">
          Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/categories" className="link">
          Categories
        </NavLink>
      </li>
    </ul>
  </header>
);
export default Navbar;
