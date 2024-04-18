# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json or yarn.lock into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Set environment variables (if necessary)
# ENV NODE_ENV=production

# Expose port 3000 (or any other port your Nest.js app listens on)
EXPOSE 3000

# Command to run the application
CMD [ "node", "dist/main" ]  # Assuming your main file is located at dist/main.js
