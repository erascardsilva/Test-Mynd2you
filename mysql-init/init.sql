
-- permissao
SHOW GRANTS FOR 'root'@'172.18.0.1';


-- Criar o banco de dados se não existir
CREATE DATABASE IF NOT EXISTS my_database;

-- Usar o banco de dados
USE my_database;

-- Criar a tabela 'pedido'
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
);


-- Inserir dados na tabela 'pedido'
INSERT INTO pedido (tipo, descricao, tamanho_porcao, ingredientes, personalizacao, finalizacao, preco, foto_path)
VALUES 
    ('prato', 'Feijoada', 'Grande', 'Feijão preto, carne seca, linguiça, costela de porco, arroz, couve, laranja', 'Sem pimenta, com farofa extra', 'Consumir na mesa', '49.90', 'feijoada.png'),
    ('prato', 'Medalhão de Mignon', 'Individual', 'Filé mignon, molho madeira, arroz branco, batata souté, brócolis', 'Ponto da carne: bem passado', 'Para viagem', '65.00', 'medalhao.png'),
    ('prato', 'Sobrecoxa de Frango Grelhada', 'Média', 'Sobrecoxa de frango, temperos naturais, purê de batatas, legumes grelhados', 'Sem salada', 'Consumir na mesa', '28.90', 'sobrecoxa.png'),
    ('prato', 'Carioquinha La Mole - Contrafilé', 'Grande', 'Arroz, feijão, contrafilé grelhado, farofa, batata frita', 'Sem pimenta, com molho extra', 'Consumir na mesa', '45.00', 'carioquinha.png'),
    ('prato', 'Lasanha de Frango', 'Média', 'Massa de lasanha, molho branco, peito de frango desfiado, queijo', 'Sem salada', 'Para viagem', '35.00', 'lasanha.png'),
    ('prato', 'Picadinho de Filé', 'Médio', 'Arroz, feijão, filé mignon, farofa, ovo frito', 'Com salada', 'Para viagem', '35.00', 'picadinho.png');
