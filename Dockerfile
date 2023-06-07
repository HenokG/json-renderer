FROM node:19.3

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

CMD ["npm", "start"]