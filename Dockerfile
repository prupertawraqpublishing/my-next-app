FROM node:alpine3.19

WORKDIR /apps

COPY package.json .

COPY . .

RUN npm ci
RUN npm run build
RUN npm install --save-dev supertest jest


EXPOSE 3000
CMD ["npm", "run", "dev"]
