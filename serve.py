#!/usr/bin/env python3
"""Simple MkDocs watcher and server with live reload."""

import subprocess
import time
from pathlib import Path

try:
    from livereload import Server
except ImportError:
    print("Missing livereload package. Install with: pip install livereload")
    exit(1)

ROOT = Path(__file__).parent.resolve()
WATCH_PATHS = [ROOT / 'docs', ROOT / 'mkdocs.yml']
SITE_DIR = ROOT / 'site'
PORT = 8000


def build():
    print("\n[rebuild] Building site...")
    result = subprocess.run(['mkdocs', 'build'], cwd=ROOT, capture_output=True, text=True)
    if result.returncode == 0:
        print("[rebuild] Done")
    else:
        print(f"[rebuild] Failed:\n{result.stderr}")


if __name__ == '__main__':
    print(f"[init] Root: {ROOT}")
    for p in WATCH_PATHS:
        print(f"[init] Watching: {p} (exists: {p.exists()})")

    build()

    server = Server()

    # Watch paths and rebuild on change
    for path in WATCH_PATHS:
        server.watch(str(path), build, delay=2)

    import socket
    local_ip = socket.gethostbyname(socket.gethostname())
    print(f"\n[server] Local:   http://127.0.0.1:{PORT}")
    print(f"[server] Network: http://{local_ip}:{PORT}")
    print("[server] Live reload enabled - browser will refresh on changes")
    server.serve(root=str(SITE_DIR), port=PORT, host='0.0.0.0')
