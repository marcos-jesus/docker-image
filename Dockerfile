FROM node
WORKDIR /app
COPY package*.json .
RUN yarn install
COPY . .
EXPOSE 3001
CMD ["node", "app.js"]
