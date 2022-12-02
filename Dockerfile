FROM node
WORKDIR /app
COPY . .
RUN npm init --yes
RUN npm install
RUN npm install http-server -g
WORKDIR /home
CMD ["http-server", "-s"] 