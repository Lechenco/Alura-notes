FROM node:latest 
LABEL Author Gabriel Lechenco
ENV NODE=production
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm start
EXPOSE 3000