FROM node:10-alpine as build-step

RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app

RUN npm run build

FROM nginx:mainline
COPY --from=build-step /app/build/ /usr/share/nginx/html
