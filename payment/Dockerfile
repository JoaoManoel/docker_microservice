FROM node:7.1.0
MAINTAINER Joao Manoel Lins

RUN mkdir /home/payment

COPY app.js /home/payment
COPY package.json /home/payment
COPY yarn.lock /home/payment

RUN npm install -g yarn

WORKDIR /home/payment

RUN yarn install

CMD ["node", "app.js"]
