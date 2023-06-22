FROM  --platform=linux/amd64  node

WORKDIR /app

COPY package.json /app/

RUN npm i

COPY . .

RUN npm run build

ENV PORT=3000

EXPOSE $PORT

CMD ["npm", "run", "start"]
