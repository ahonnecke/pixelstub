FROM node:22-slim AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

FROM node:22-slim AS dev
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
CMD ["npm", "run", "dev"]
