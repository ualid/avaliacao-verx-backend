FROM node:alpine

WORKDIR /node-app

COPY package.json .

RUN npm install
RUN npm install nodemon -g
RUN npm install mocha -g

COPY . . 

EXPOSE 3000

CMD [ "npm", "run", "dev" ]