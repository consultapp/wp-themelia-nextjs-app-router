FROM node

WORKDIR /app

COPY package.json /app/

RUN npm i

COPY . . 

EXPOSE 3011

CMD ["npm", "run", "start"]
