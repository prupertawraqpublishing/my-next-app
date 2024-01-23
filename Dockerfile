FROM node:alpine3.19

WORKDIR /apps

COPY package.json .

COPY . .

RUN npm ci
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "dev"]
