FROM node:10
ADD . /app
WORKDIR /app
RUN npm i
RUN npm audit fix --force
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]