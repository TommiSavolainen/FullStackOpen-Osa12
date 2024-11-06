FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Install Nodemon globally
RUN npm install -g nodemon

# Set environment variables
ENV REDIS_URL=redis://redis:6379
ENV MONGO_URL=mongodb://mongo:27017/the_database

# Expose port 3000
EXPOSE 3000

# Start the application with Nodemon
CMD ["nodemon", "./bin/www"]