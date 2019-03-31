FROM node:8.12.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
RUN npm install nodemon -g
RUN npm install -g babel-cli
COPY . /usr/src/app
EXPOSE 3001
EXPOSE 27019
CMD [ "npm", "start" ]