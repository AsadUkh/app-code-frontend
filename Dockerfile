FROM node:12-alpine3.14
WORKDIR /app
COPY . /app
COPY package.json /app
RUN npm i

EXPOSE 3000
CMD ["npm", "run", "start"]


