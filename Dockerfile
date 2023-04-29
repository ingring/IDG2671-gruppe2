FROM node:14-alpine

WORKDIR /app

COPY ./idg2671-webproject/package.json ./
COPY ./idg2671-webproject/package-lock.json ./

RUN npm install

COPY ./idg2671-webproject ./

RUN npm run build

CMD [ "npm", "start" ]
