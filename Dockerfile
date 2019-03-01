FROM node:9
WORKDIR /home/www/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8097
CMD ["node","server.js"]