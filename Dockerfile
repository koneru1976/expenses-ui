# stage 0

FROM node:10 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration


# stage 1
FROM nginx
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY ./nginx-default.conf /etc/nginx/conf.d/default.conf
