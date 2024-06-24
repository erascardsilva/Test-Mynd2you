import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import ListarPedidos from './components/ListaPedidos';
import PedidoForm from './components/PedidoForm';
import GridLayout from './components/GridLayoult';

const App = () => {
  return (
    <Router>
      <GridLayout>
        <div className="app container">
          <div className="row">
            <div className="col-md-3">
              <Menu />
            </div>
            <div className="col-md-9">
              <div className="content">
                <Routes>
                  <Route path="/" element={<ListarPedidos />} />
                  <Route path="/favor" element={<h2>Conteúdo dos Favoritos</h2>} />
                  <Route path="/pratos" element={<h2>Conteúdo dos Pratos</h2>} />
                  <Route path="/lanches" element={<h2>Conteúdo dos Lanches</h2>} />
                  <Route path="/classif" element={<h2>Conteúdo das Classificações</h2>} />
                  <Route path="/menusub" element={<h2>Conteúdo do Menu Sub</h2>} />
                </Routes>
              </div>
            </div>
          </div>
          <PedidoForm />
        </div>
      </GridLayout>
    </Router>
  );
};

export default App;
