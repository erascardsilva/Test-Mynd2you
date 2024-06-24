import React, { useState, useEffect } from 'react';
import './GridLayoult.css';
import axios from 'axios';
import { FaBars, FaSearch, FaTh, FaWallet, FaShoppingCart, FaStar, FaBook, FaGlassCheers } from 'react-icons/fa';

const GridLayout = () => {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    const fetchPratos = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/pedidos');
        setPratos(response.data);
      } catch (error) {
        console.error('Erro ao buscar pratos:', error);
      }
    };

    fetchPratos();
  }, []);

  return (
    <div className="angry-grid">
      <div id="item-0" className="item-0">
        <div className="menu-title">
          <h1>Mind2you | Erasmo</h1>
        </div>
        <div className="icons-container d-flex">
          <button className="btn">
            <FaBars className="icon-white" />
            Menu
          </button>
          <button className="btn">
            <FaSearch className="icon-white" />
            Pesquisar
          </button>
          <button className="btn">
            <FaTh className="icon-white" />
            Diversos
          </button>
          <button className="btn">
            <FaWallet className="icon-white" />
            Conta
          </button>
          <button className="btn">
            <FaShoppingCart className="icon-white" />
            Carrinho
          </button>
        </div>
      </div>
      <div id="item-1" className="item-1">
        <div className="vertical-menu">
          <button className="btn-vertical active">
            <FaStar className="icon-white" />
            Favorito
          </button>
          <button className="btn-vertical">
            <FaBook className="icon-white" />
            Cardápio
          </button>
          <button className="btn-vertical">
            <FaGlassCheers className="icon-white" />
            Bebidas
          </button>
        </div>
      </div>
      <div id="item-2" className="item-2">
        <div className="vertical-menu">
          <button className="btn-vertical">
            Todos Pratos
          </button>
          <button className="btn-vertical">
            Pratos
          </button>
          <button className="btn-vertical">
            Lanches
          </button>
          <button className="btn-vertical">
            Sobremesas
          </button>
          <button className="btn-vertical">
            Chás
          </button>
          <button className="btn-vertical">
            Produtos da loja
          </button>
          <button className="btn-vertical">
            Bebidas
          </button>
        </div>
      </div>
      <div id="item-3" className="item-3">
        {pratos.map(prato => (
          <div key={prato.id} className="prato-item">
            <div className="prato-info">
              <div className="prato-image">
                <img src={`/upload/${prato.foto_path}`} alt={prato.descricao} />
              </div>
              <div className="prato-details">
                <h2>{prato.descricao}</h2>
                {/* <p>Tipo: {prato.tipo}</p> */}
                <p>Tamanho: {prato.tamanho_porcao}</p>
                <p>Ingredientes: {prato.ingredientes}</p>
                <p>Personalização: {prato.personalizacao}</p>
                <p>Finalização: {prato.finalizacao}</p>
                {typeof prato.preco === 'string' && prato.preco && <p>Preço: R$ {parseFloat(prato.preco).toFixed(2)}</p>}
                <div className="prato-actions">
                  <button className="btn btn-red">Adicionar ao Pedido</button>
                  <button className="btn btn-red">Personalizar</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridLayout;
