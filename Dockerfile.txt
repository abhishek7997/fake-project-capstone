FROM node                    // Define a base image
COPY ./ ./                    // Copy project files to the container
RUN npm init --yes
RUN npm install              // Install node packages
RUN npm install http-server -g
WORKDIR "/home"
RUN http-server
PORT 3000                    // Define the PORT
CMD ["npm", "start"]         // Define startup command