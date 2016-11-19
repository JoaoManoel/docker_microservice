FROM node:7.1.0
MAINTAINER Joao Manoel Lins

RUN mkdir /home/api

COPY app.js /home/api
COPY package.json /home/api
COPY yarn.lock /home/api

RUN npm install -g yarn

WORKDIR /home/api

RUN yarn install

EXPOSE 2003

CMD ["node", "app.js"]
