# Documentação do Projeto

<img width = "1000px" src="https://github.com/erascardsilva/Test-Mynd2you/assets/70297459/247f965d-b39f-4757-8063-380e7847cf87">


## Visão Geral
Este projeto consiste em uma aplicação web desenvolvida com React no frontend e Express no backend. Utiliza um banco de dados MySQL para armazenar e gerenciar dados relacionados a pedidos de alimentos. O Docker é utilizado para facilitar a configuração e execução do ambiente de desenvolvimento.

Execultar o projeto 
No diretorio raiz do projedo digite :
  ```
  docker-compose up --build
  ```

## Componentes Principais
- **Frontend**: Desenvolvido em React, este componente oferece uma interface de usuário interativa para visualização e interação com os pedidos de alimentos.
  
- **Backend**: Implementado com Express, o backend fornece uma API RESTful que permite a criação, leitura, atualização e exclusão (CRUD) de pedidos no banco de dados MySQL.
  
- **Banco de Dados**: Utiliza MySQL para armazenar e gerenciar os dados dos pedidos, incluindo informações como tipo de prato, descrição, tamanho da porção, ingredientes, entre outros.
  
- **Docker**: O Docker é utilizado para containerizar a aplicação, permitindo a fácil configuração do ambiente de desenvolvimento com todas as dependências necessárias.

## Configuração do Ambiente
Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:
git clone git@github.com:erascardsilva/react-mysql-mindtwoyou.git
cd react-mysql-mindtwoyou

2. **Instalação das Dependências**:
- **Frontend**: Instale as dependências do React.
  ```
  cd frontend
  npm install
  ```
- **Backend**: Instale as dependências do Express.
  ```
  cd backend
  npm install
  ```

3. **Configuração do Banco de Dados**:
- Certifique-se de que o MySQL esteja instalado e configurado.
- Importe o schema do banco de dados e os dados iniciais, se aplicável.

4. **Configuração do Docker**:
- Utilize o Docker para configurar e executar os contêineres necessários.
- Exemplo de `docker-compose.yml`:
  ```yaml
  version: '3'
  services:
    frontend:
      build: ./frontend
      ports:
        - '3000:3000'
      depends_on:
        - backend
    backend:
      build: ./backend
      ports:
        - '5000:5000'
      environment:
        MYSQL_HOST: mysql
        MYSQL_USER: root
        MYSQL_PASSWORD: password
        MYSQL_DATABASE: my_database
    mysql:
      image: mysql:latest
      restart: always
      environment:
        MYSQL_ROOT_PASSWORD: password
        MYSQL_DATABASE: my_database
  ```

5. **Executando a Aplicação**:
- No diretório raiz do projeto, execute:
  ```
  docker-compose up --build
  ```
- O frontend estará acessível em `http://localhost:3000` e o backend em `http://localhost:4000`.

## Rotas da API
A API oferece as seguintes rotas para gerenciar pedidos:

- **GET `/api/pedidos`**: Retorna todos os pedidos cadastrados.

- **POST `/api/pedidos`**: Cria um novo pedido com os dados fornecidos no corpo da requisição.

- **PUT `/api/pedidos/:id`**: Atualiza um pedido existente com o ID especificado.

- **DELETE `/api/pedidos/:id`**: Deleta um pedido existente com o ID especificado.

Exemplo de uso das rotas:

```javascript
// Exemplo de requisição GET para buscar todos os pedidos
fetch('/api/pedidos')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro ao buscar pedidos:', error));

// Exemplo de requisição POST para criar um novo pedido
fetch('/api/pedidos', {
method: 'POST',
headers: {
 'Content-Type': 'application/json',
},
body: JSON.stringify({
 tipo: 'prato',
 descricao: 'Feijoada',
 tamanho_porcao: 'Grande',
 ingredientes: 'Feijão preto, carne seca, linguiça, costela de porco, arroz, couve, laranja',
 personalizacao: 'Sem pimenta, com farofa extra',
 finalizacao: 'Consumir na mesa',
 preco: '49.90',
 foto_path: 'feijoada.png',
}),
})
.then(response => response.json())
.then(data => console.log('Novo pedido criado:', data))
.catch(error => console.error('Erro ao criar novo pedido:', error));


- No diretório raiz do backend usar para testes api.http:
  ```
  api.http

  ### Listar todos os pedidos
GET http://localhost:4000/api/pedidos
Content-Type: application/json

###
etc....
  ```