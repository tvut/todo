FROM node:16-alpine
WORKDIR /todo
COPY ./package.json /todo/package.json
EXPOSE 3000
RUN npm install
CMD ["npm","start"]
