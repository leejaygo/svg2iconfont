FROM node:9.11.1
WORKDIR /home/www/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8097
CMD ["node","server.js"]