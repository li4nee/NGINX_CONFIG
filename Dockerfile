FROM node:22-alpine3.20

# Set the working directory

WORKDIR /app
COPY server.js .
COPY index.html .
COPY images ./images
COPY package.json .

# Install the dependencies
RUN npm i 

# Expose the port
EXPOSE 3000

# Start the application
CMD [ "npm" ,"run" ,"dev" ]
