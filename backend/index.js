const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config(); // dotenv .env

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());    

// Conexão com o banco de dados
const db = mysql.createConnection({
  user: process.env.DB_USER,
  host: 'db', 
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT 
});

// Testando a conexão com o banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão com o banco de dados MySQL estabelecida.');
    
    // Criar o banco de dados se não existir
    db.query('CREATE DATABASE IF NOT EXISTS my_database', (err) => {
        if (err) {
            console.error('Erro ao criar o banco de dados:', err);
            return;
        }
        console.log('Banco de dados "my_database" criado com sucesso.');
        
        // Usar o banco de dados
        db.query('USE my_database', (err) => {
            if (err) {
                console.error('Erro ao usar o banco de dados:', err);
                return;
            }
            console.log('Usando o banco de dados "my_database".');
            
            // Criar a tabela 'pedido'
            db.query(`
                CREATE TABLE IF NOT EXISTS pedido (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    tipo VARCHAR(255) NOT NULL,
                    descricao VARCHAR(255) NOT NULL,
                    tamanho_porcao VARCHAR(50),
                    ingredientes TEXT,
                    personalizacao TEXT,
                    finalizacao VARCHAR(50),
                    preco TEXT,
                    foto_path VARCHAR(255)
                )
            `, (err) => {
                if (err) {
                    console.error('Erro ao criar a tabela "pedido":', err);
                    return;
                }
                console.log('Tabela "pedido" criada com sucesso.');
                
                // Inserir dados na tabela 'pedido'
                db.query(`
                    INSERT INTO pedido (tipo, descricao, tamanho_porcao, ingredientes, personalizacao, finalizacao, preco, foto_path)
                    VALUES 
                        ('prato', 'Feijoada', 'Grande', 'Feijão preto, carne seca, linguiça, costela de porco, arroz, couve, laranja', 'Sem pimenta, com farofa extra', 'Consumir na mesa', '49.90', 'feijoada.png'),
                        ('prato', 'Medalhão de Mignon', 'Individual', 'Filé mignon, molho madeira, arroz branco, batata souté, brócolis', 'Ponto da carne: bem passado', 'Para viagem', '65.00', 'medalhao.png'),
                        ('prato', 'Sobrecoxa de Frango Grelhada', 'Média', 'Sobrecoxa de frango, temperos naturais, purê de batatas, legumes grelhados', 'Sem salada', 'Consumir na mesa', '28.90', 'sobrecoxa.png'),
                        ('prato', 'Carioquinha La Mole - Contrafilé', 'Grande', 'Arroz, feijão, contrafilé grelhado, farofa, batata frita', 'Sem pimenta, com molho extra', 'Consumir na mesa', '45.00', 'carioquinha.png'),
                        ('prato', 'Lasanha de Frango', 'Média', 'Massa de lasanha, molho branco, peito de frango desfiado, queijo', 'Sem salada', 'Para viagem', '35.00', 'lasanha.png'),
                        ('prato', 'Picadinho de Filé', 'Médio', 'Arroz, feijão, filé mignon, farofa, ovo frito', 'Com salada', 'Para viagem', '35.00', 'picadinho.png')
                `, (err) => {
                    if (err) {
                        console.error('Erro ao inserir dados na tabela "pedido":', err);
                        return;
                    }
                    console.log('Dados inseridos na tabela "pedido" com sucesso.');
                });
            });
        });
    });
});

// Rotas API
app.get('/api/pedidos', (req, res) => {
    db.query('SELECT * FROM pedido', (err, results) => {
        if (err) {
            console.error('Erro ao buscar pedidos:', err);
            res.status(500).json({ error: 'Erro ao buscar pedidos' });
            return;
        }
        res.json(results);
    });
});

app.post('/api/pedidos', (req, res) => {
    const novoPedido = req.body;
    db.query('INSERT INTO pedido SET ?', novoPedido, (err, result) => {
        if (err) {
            console.error('Erro ao inserir pedido:', err);
            res.status(500).json({ error: 'Erro ao inserir pedido' });
            return;
        }
        res.json({ id: result.insertId, ...novoPedido });
    });
});

app.put('/api/pedidos/:id', (req, res) => {
    const idPedido = req.params.id;
    const novoPedido = req.body;
    db.query('UPDATE pedido SET ? WHERE id = ?', [novoPedido, idPedido], (err, result) => {
        if (err) {
            console.error('Erro ao atualizar pedido:', err);
            res.status(500).json({ error: 'Erro ao atualizar pedido' });
            return;
        }
        res.json({ id: idPedido, ...novoPedido });
    });
});

app.delete('/api/pedidos/:id', (req, res) => {
    const idPedido = req.params.id;
    db.query('DELETE FROM pedido WHERE id = ?', idPedido, (err, result) => {
        if (err) {
            console.error('Erro ao deletar pedido:', err);
            res.status(500).json({ error: 'Erro ao deletar pedido' });
            return;
        }
        res.json({ message: 'Pedido deletado com sucesso' });
    });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor backend rodando na porta ${port}`);
});