FROM node:22-alpine
WORKDIR /backend
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 4000
CMD ["npm", "start"]