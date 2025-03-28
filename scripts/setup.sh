#!/bin/bash
echo "Setting up PhishX Environment..."

# Install backend dependencies
echo "Installing Go dependencies..."
cd ../backend
go mod tidy

# Install frontend dependencies
echo "Installing Node.js dependencies..."
cd ../frontend
npm install

echo "Setup completed successfully!"
