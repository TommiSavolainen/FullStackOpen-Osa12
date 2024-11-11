FROM node:18-alpine AS build
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code
COPY . .
# Set environment variable for the backend URL
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=http://localhost:8080/api
# Build the application
RUN npm run build
# Use an official nginx image to serve the built files
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Expose port 80
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]