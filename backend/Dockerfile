#  imagem
FROM node:18-alpine

# diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta em que o servidor irá rodar
EXPOSE 4000

# Comando para rodar a aplicação
CMD ["node", "index.js"]
