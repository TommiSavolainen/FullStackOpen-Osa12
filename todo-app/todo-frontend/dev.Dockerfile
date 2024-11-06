FROM node:18-alpine
# Set the working directory
WORKDIR /app
# Install dependencies
COPY package*.json ./
RUN npm install
# Copy the rest of the application code
COPY . .
# Install Nodemon globally
RUN npm install -g nodemon
# Set environment variables
ENV VITE_BACKEND_URL=http://localhost:3000
# Expose port 5173
EXPOSE 5173
# Start the application with Nodemon
CMD ["nodemon", "--watch", ".", "npm", "run", "dev", "--", "--host"]