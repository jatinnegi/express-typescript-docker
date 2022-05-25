FROM node:latest
WORKDIR /srv/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8090
CMD ["node", "build/src/index.js"]