FROM node:lts-alpine AS build-stage 
#выше у нас версия node с долгосрочной поддержкой latest на Alpine Linux
WORKDIR /analict-complect/src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
#тут уже всё загружено и всё есть, никакие дополнительные образы не нужны для установки