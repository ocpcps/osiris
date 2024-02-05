# Etapa 1: Construir o ambiente
FROM node:latest as build-step

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Etapa 2: Preparar ambiente de produção
FROM nginx:alpine

COPY --from=build-step /app/dist/frontangular /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]