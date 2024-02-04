# Use a imagem base do Node.js mais atualizada versão Alpine (mais reduzida)
FROM node:alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o yarn.lock (ou package-lock.json)
# para a pasta de trabalho do container
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o conteúdo do projeto para a pasta de trabalho do container
COPY . .

# Exponha a porta necessária pelo seu servidor Node.js
EXPOSE 3000

# Defina o comando padrão para iniciar o servidor Node.js
CMD ["npm", "start"]