# Use a imagem oficial do Node.js como base
FROM node:18

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install -g @angular/cli
RUN npm install

# Copie todo o projeto para o diretório de trabalho
COPY . .

# Expõe a porta em que o aplicativo será executado
EXPOSE 4200

# Comando para iniciar a aplicação Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]