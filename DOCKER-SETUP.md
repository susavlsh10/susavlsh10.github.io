# Docker Setup for Jekyll Academic Pages

This setup allows you to run your Jekyll site locally using Docker, which is especially useful on Apple Silicon Macs where Ruby dependencies can be difficult to install.

## Prerequisites

- [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop) installed and running

## Quick Start

### Option 1: Using the Helper Script (Easiest)

```bash
./run-docker.sh
```

### Option 2: Using Docker Compose Directly

```bash
docker compose up --build
```

### Option 3: Using Docker Command Directly

```bash
docker build -t jekyll-site .
docker run -p 4000:4000 -p 35729:35729 -v $(pwd):/site jekyll-site
```

## Accessing Your Site

Once the container is running, open your browser to:
- **Local site**: http://localhost:4000
- **LiveReload** is enabled, so changes will automatically refresh your browser

## Making Changes

1. Edit your files normally in VS Code or your preferred editor
2. Save the files
3. Jekyll will automatically detect the changes and rebuild
4. Your browser will automatically reload (if LiveReload is working)

## Stopping the Server

Press `Ctrl+C` in the terminal where Docker is running.

## Rebuilding

If you make changes to `Gemfile` or need to reinstall dependencies:

```bash
docker compose up --build
```

The `--build` flag forces Docker to rebuild the image with updated dependencies.

## Troubleshooting

### Port Already in Use

If you see an error that port 4000 is already in use:

```bash
# Find the process using port 4000
lsof -ti:4000

# Kill it
kill -9 $(lsof -ti:4000)
```

### Permission Issues

If you encounter permission errors:

```bash
# Stop all containers
docker compose down

# Remove the volume
docker volume rm susavlsh10githubio_bundle_cache

# Rebuild
docker compose up --build
```

### Changes Not Reflecting

1. Check that the file is saved
2. Look at the terminal output for Jekyll rebuild messages
3. Try a hard refresh in your browser (`Cmd+Shift+R`)
4. Restart the Docker container if needed

## Cleaning Up

To remove all Docker containers, images, and volumes:

```bash
# Stop and remove containers
docker compose down

# Remove the cached gems volume
docker compose down -v

# Remove the Docker image
docker rmi $(docker images -q 'susavlsh10githubio*')
```

## Technical Details

- **Base Image**: Ruby 3.1 on Debian
- **Gems**: Installed via Bundler from your `Gemfile`
- **Volume Mounts**: 
  - `.` -> `/site`: Your project files
  - `bundle_cache`: Cached gems for faster rebuilds
- **Ports**:
  - `4000`: Jekyll server
  - `35729`: LiveReload

## Benefits of Docker Approach

1. **No Ruby installation needed** on your Mac
2. **Consistent environment** across different machines
3. **Easy cleanup** - just remove containers and images
4. **Isolated** - doesn't interfere with other Ruby projects
5. **Works great on Apple Silicon** - no architecture compatibility issues
