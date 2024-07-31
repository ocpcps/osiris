# Etapa de build
FROM node:21 as builder

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o código fonte do projeto
COPY . .

# Copiar os arquivos de configuração do npm
COPY package.json package-lock.json ./

# Instalar as dependências do npm
RUN npm install

# Rodar o build da aplicação
RUN npm run build

# Importar o NGINX
FROM nginx:alpine

# Copiar todos os arquivos do builder para o servidor nginx
COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html

# Copiar o arquivo de configuração do NGINX
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types

# Expor a porta 80
EXPOSE 80

# Comando que vai iniciar a aplicação
CMD [ "nginx", "-g", "daemon off;" ]
