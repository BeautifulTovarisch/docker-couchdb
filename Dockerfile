FROM node:8.9.0

WORKDIR /app

COPY package.json .

RUN npm install

COPY . /app

CMD [ "npm", "start" ]