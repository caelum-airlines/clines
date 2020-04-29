FROM node:12.16.3-buster-slim

WORKDIR /app

COPY package-lock.json package.json /app/

RUN npm install

COPY next.config.js /app
COPY public/ /app/public/
COPY pages/ /app/pages/
COPY components/ /app/components/
COPY lib/ /app/lib/
COPY styles/ /app/styles/

EXPOSE 3000

CMD npm run build && npm run start
