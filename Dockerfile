FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm install -g @nestjs/cli

RUN nest build

CMD ["node", "dist/main.js"]
 