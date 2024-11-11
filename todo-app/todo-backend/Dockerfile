FROM node:18-alpine
# Set the working directory
WORKDIR /usr/src/app
# Install dependencies
COPY package*.json ./
RUN npm install
# Copy the rest of the application code
COPY . .
# Set environment variables
ENV NODE_ENV=production
# Expose port 3000
EXPOSE 3000
# Start the application
CMD ["node", "./bin/www"]