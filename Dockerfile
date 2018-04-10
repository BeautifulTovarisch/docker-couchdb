# Build Process

FROM node:8.11.1 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . /app
CMD [ "npm", "start" ]

# Production Image

FROM node:8.11.1-alpine

WORKDIR /app

COPY --from=build /app /app

RUN npm run production-build

USER node
CMD [ "node", "server.js" ]
