#!/bin/bash
echo "Deploying PhishX using Docker..."

# Build and start Docker containers
docker-compose up --build -d

echo "Deployment completed!"
