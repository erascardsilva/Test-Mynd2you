// components/Menu.js

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();

  return (
    <div className="menu">
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}><NavLink exact to="/">Home</NavLink></li>
        <li className={location.pathname === '/favor' ? 'active' : ''}><NavLink to="/favor">Favoritos</NavLink></li>
        <li className={location.pathname === '/pratos' ? 'active' : ''}><NavLink to="/pratos">Pratos</NavLink></li>
        <li className={location.pathname === '/lanches' ? 'active' : ''}><NavLink to="/lanches">Lanches</NavLink></li>
        <li className={location.pathname === '/classif' ? 'active' : ''}><NavLink to="/classif">Classificações</NavLink></li>
        <li className={location.pathname === '/menusub' ? 'active' : ''}><NavLink to="/menusub">Menu Sub</NavLink></li>
      </ul>
    </div>
  );
};

export default Menu;

