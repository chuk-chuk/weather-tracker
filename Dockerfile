# base image
FROM node:latest
#create app working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . .

EXPOSE 3000
#declare how we should start the app
CMD ["npm", "start"]

