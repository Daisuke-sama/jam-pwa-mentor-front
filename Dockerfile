FROM node:alpine as static-builder

COPY . ./

RUN npm install
RUN npm run build

FROM nginx

COPY --from=static-builder /dist/. /usr/share/nginx/html/