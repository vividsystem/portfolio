# portfolio
My personal portfolio website built using [`solid-start`](https://start.solidjs.com);
## Features
* automated project page -> fetches all my repos automatically. also supports filtering by topics (like software, hardware)
* the other stuff you would expect from a portfolio site like: about me and contact
* very cool and fancy cursor (desktop only) and hover animations
* full mobile-support
## Deploying
```bash
bun run build
bun run ./.output/server/index.mjs
```

systemd service
```
[Unit]
Description=portfolio
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/srv/portfolio
ExecStart=/usr/local/bin/bun run .output/server/index.mjs
Restart=on-failure
RestartSec=5

# Environment (for reverse proxy)
Environment=NODE_ENV=production
Environment=PORT=3000

# Logging (goes to journald)
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
```
