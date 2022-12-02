FROM node
WORKDIR /app
COPY . .
WORKDIR /home
EXPOSE 3000
CMD ["node", "app.js"]