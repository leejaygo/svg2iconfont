FROM hub.c.163.com/library/node:latest
WORKDIR /home/www/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8097
CMD ["node","server.js"]