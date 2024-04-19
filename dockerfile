# Use the official Node.js image as the base image
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json or yarn.lock into the container
COPY package*.json ./

# Install Nest.js CLI globally
RUN npm install -g @nestjs/cli

# Install dependencies
RUN npm install --production



# Copy the rest of the application code into the container
COPY . .

# Build the application
RUN npm run build

# Use a slim base image for the final image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only the necessary artifacts from the build stage
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/package.json ./
# Install dependencies
RUN npm install --production
# Expose port 3000 (or any other port your Nest.js app listens on)
EXPOSE 3000

# Command to run the application
CMD [ "node", "dist/main" ]
