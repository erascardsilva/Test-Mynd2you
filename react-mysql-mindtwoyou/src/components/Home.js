// Home.js

import React from 'react';
import Menu from '../components/Menu';
import './GridLayoult.css'; 
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <Menu />
      <div className="content">
        <div className="angry-grid">
          <div id="item-0">
            <div className="d-flex justify-content-end">
              <Link to="/search" className="btn btn-primary me-2">
                <i className="bi bi-search"></i> Pesquisar
              </Link>
              <button className="btn btn-secondary me-2">
                <i className="bi bi-grid"></i> Diversos
              </button>
              <button className="btn btn-info me-2">
                <i className="bi bi-wallet"></i> Carteira
              </button>
              <button className="btn btn-warning">
                <i className="bi bi-cart"></i> Carrinho
              </button>
            </div>
          </div>
          <div id="item-1">&nbsp;</div>
          <div id="item-2">&nbsp;</div>
          <div id="item-3">&nbsp;</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
