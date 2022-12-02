FROM node
WORKDIR /app
COPY . .
RUN npm init --yes
RUN npm install
RUN npm install http-server -g
WORKDIR /home
EXPOSE 3000
CMD ["http-server", "-s"] 