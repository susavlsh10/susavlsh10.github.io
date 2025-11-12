#!/bin/bash

# Script to easily run Jekyll site with Docker

echo "🚀 Starting Jekyll site with Docker..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker Desktop for Mac."
    echo "   Download from: https://www.docker.com/products/docker-desktop"
    exit 1
fi

# Check if Docker is running
if ! docker info &> /dev/null; then
    echo "❌ Docker is not running. Please start Docker Desktop."
    exit 1
fi

# Build and run with docker compose
docker compose up --build

echo "✅ Jekyll site is now running!"
echo "   Local: http://localhost:4000"
echo "   Press Ctrl+C to stop"
