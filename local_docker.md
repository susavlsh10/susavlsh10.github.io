# Local Development with Docker

## Option 1: Docker Compose (Recommended)

The project includes a `docker-compose.yml` with live reload pre-configured.

```bash
docker compose up
```

Then open **http://localhost:4000** in your browser.

The site will automatically rebuild and refresh when you save changes to any file.

To stop the server, press `Ctrl+C`, then run:

```bash
docker compose down
```

---

## Option 2: Plain Docker (without docker-compose)

### Basic serve

```bash
docker run --rm -v "$PWD:/srv/jekyll" -p 4000:4000 jekyll/jekyll jekyll serve
```

### With live reload

```bash
docker run --rm \
  -v "$PWD:/srv/jekyll" \
  -p 4000:4000 \
  -p 35729:35729 \
  jekyll/jekyll jekyll serve --livereload
```

Then open **http://localhost:4000** in your browser.

---

## Notes

- **`_config.yml` changes** require a full server restart to take effect (live reload won't pick them up automatically).
- The first build may take a minute as gems are installed. Subsequent builds are faster due to bundle caching.
- If port 4000 is already in use, stop any existing container or change the port mapping (e.g. `-p 4001:4000`).
