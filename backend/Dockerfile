FROM node:22-alpine
WORKDIR /backend
COPY package*.json ./
RUN npm ci
COPY . .
ENV TZ=Asia/Sakhalin
RUN apk add --no-cache tzdata curl openssh
EXPOSE 4000
CMD ["npm", "start"]