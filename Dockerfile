FROM node
WORKDIR /app
COPY . .
RUN npm init --yes
RUN npm install
RUN npm install jest --save-dev
RUN npm install http-server -g
RUN npm install @testing-library/dom
RUN npm install @testing-library/jest-dom
RUN npm install jsdom
EXPOSE 8080
WORKDIR /app/home
CMD ["http-server"] 