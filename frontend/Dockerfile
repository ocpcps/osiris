# Etapa de build
FROM node:19-alpine as build

WORKDIR /app

# Copiar arquivos de configuração do npm
COPY package.json package-lock.json ./
RUN npm install

# Copiar todo o código fonte e construir a aplicação Angular
COPY . .
RUN npm run build --prod

# Etapa de produção
FROM nginx:alpine

# Copiar arquivos de build da etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando padrão para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]
