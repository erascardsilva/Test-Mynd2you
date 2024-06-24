import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListarPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/pedidos');
        setPedidos(response.data);
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    };

    fetchPedidos();
  }, []);

  return (
    <div>
      <h2>Lista de Pedidos</h2>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>{pedido.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListarPedidos;
