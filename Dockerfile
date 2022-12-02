FROM node
WORKDIR /app
COPY . .
RUN npm init --yes
RUN npm install
RUN npm install http-server -g
EXPOSE 8080
WORKDIR /app/home
CMD ["http-server"] 