#Construccion por capas
# Etapa de construcción
FROM node:20.9.0-alpine3.18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install && npm install -g typescript
COPY . .
EXPOSE 3000
RUN npm run build

# Etapa de ejecución
FROM node:20.9.0-alpine3.18
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json .
COPY --from=build /app/vite.config.ts .
RUN npm install --production
EXPOSE 3000
CMD [ "npm", "run", "preview"]


