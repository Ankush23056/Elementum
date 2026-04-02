# -------------------------
# Stage 1: Build the React app
# -------------------------
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# -------------------------
# Stage 2: Serve with Nginx
# -------------------------
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy our custom nginx configuration
# This configures Nginx to listen on port 3000 and handle client-side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the static build files from the 'build' stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 3000 to the outside world
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
