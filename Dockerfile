FROM node:lts-alpine

WORKDIR /app

EXPOSE 3000

RUN npm install --location=global serve

CMD ["serve", "-s", "build", "-l", "3000"]

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY webpack.config.js ./
COPY babel.config.js ./
COPY .browserslistrc ./

RUN yarn install --pure-lockfile

COPY ./static ./static
COPY ./src ./src

RUN yarn build
