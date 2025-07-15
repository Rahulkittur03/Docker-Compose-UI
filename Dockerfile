# Stage 1: Build the React application
# This stage is responsible for compiling your React source code into static, optimized files.
# We use a Node.js image as it provides npm and the JavaScript runtime needed for Vite.
FROM node:20-alpine AS build

# Set the working directory inside the container for this stage.
# All subsequent commands in this stage will be executed relative to this directory.
WORKDIR /app

# Copy package.json and package-lock.json into the working directory.
# This step is done separately before copying the rest of the code.
# The reason is to leverage Docker's build cache: if only your dependencies (package.json/lock.json) change,
# Docker will rebuild from this layer. If only your source code changes, it can use the cached
# dependency installation layer, making builds faster.
COPY package.json package-lock.json ./

# Install project dependencies using npm.
# 'npm ci' (clean install) is preferred over 'npm install' in CI/CD and production builds.
# It's faster and ensures that the exact versions specified in package-lock.json are installed,
# leading to more consistent and reproducible builds.
RUN npm ci

# Copy the rest of the application source code into the container.
# This includes all your React components, public assets, etc.
COPY . .

# Build the React application for production.
# The 'npm run build' command (which executes 'vite build' as per your package.json)
# will compile your React code, minify it, optimize assets, and place the
# production-ready static files into the 'dist' folder by default (for Vite).
RUN npm run build

# Stage 2: Serve the application with NGINX
# This stage takes the *output* from the 'build' stage and serves it using a lightweight NGINX server.
# We use 'nginx:alpine' because Alpine Linux is very small, resulting in a tiny final image.
FROM nginx:alpine

# Copy your custom NGINX configuration file into the container.
# This file (which you need to create, see below) tells NGINX how to serve your Single Page Application (SPA).
# It's placed in /etc/nginx/conf.d/ to be automatically included by NGINX.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built React app from the 'build' stage (named 'build')
# to NGINX's default web-serving directory within this new container.
# This is where NGINX will look for your index.html and other static assets.
# Only the essential static files are copied, not the entire Node.js build environment.
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80.
# This informs Docker that the container listens on port 80 at runtime.
# When you run the container, you will map a host port (e.g., 8080) to this internal port 80.
EXPOSE 80

# Define the command to run when the container starts.
# 'nginx -g "daemon off;"' runs NGINX in the foreground, which is crucial for Docker containers.
# If NGINX ran as a daemon (in the background), Docker would think the main process exited and stop the container.
CMD ["nginx", "-g", "daemon off;"]
