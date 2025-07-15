# Стадия сборки
FROM node:22-alpine AS build
WORKDIR /frontend
COPY . .

# Стадия запуска
FROM nginx:alpine
COPY --from=build /frontend/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
ENV TZ=Asia/Sakhalin
RUN apk add --no-cache tzdata curl openssh
EXPOSE 80