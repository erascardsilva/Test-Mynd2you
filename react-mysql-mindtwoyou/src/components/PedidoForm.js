import React, { useState } from 'react';
import axios from 'axios';

const PedidoForm = () => {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const novoPedido = { nome, quantidade };
      await axios.post('http://localhost:4000/api/pedidos', novoPedido);
      setNome('');
      setQuantidade('');
      alert('Pedido enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
      alert('Erro ao enviar pedido');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Novo Pedido</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Quantidade:</label>
        <input
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          required
        />
      </div>
      <button type="submit">Enviar Pedido</button>
    </form>
  );
};

export default PedidoForm;
