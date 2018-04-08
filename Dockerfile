# Build Process

FROM node:8.9.0 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . /app
CMD [ "npm", "start" ]

# Production Image

FROM node:alpine
COPY --from=build . /app
USER node
CMD [ "node", "/app/server.js" ]
