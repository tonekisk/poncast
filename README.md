# PonCast (v0.5 Release) 📺

![Python](https://img.shields.io/badge/Python-3.8%2B-blue?logo=python) ![License](https://img.shields.io/badge/license-MIT-green) ![Platform](https://img.shields.io/badge/platform-macOS-lightgrey)

A real-time **Web Telop Control System** for podcasts and live streaming, integrated with OBS Studio. Manage subtitles, images, videos, and scrolling text in real-time from a browser-based dashboard, reflecting instantly on OBS via WebSockets.

## Latest Update (v0.5) - 2026/03/24 🚀

- **macOS Menu Bar Resident App**: Monitor and control the server from the menu bar without keeping a terminal open.
- **Intelligent Startup**: Automatically discovers the best Python environment and opens the dashboard instantly.

---

## How to Launch

### macOS (Recommended)
1. Double-click **Mac.PonCast.app**.
2. An icon will appear in the menu bar, the server will start, and the dashboard will open automatically.
3. To stop, select "Quit" from the menu bar icon.

### Windows
1. Double-click **Win.start.bat**.
2. A terminal window will open, and the server will start.

---

[日本語版はこちら (Japanese version)](README.ja.md)

---

## Key Features

| Feature | Description |
|---|---|
| **Telop Display** | Lower-third style text overlays |
| **Media Overlay** | Overlay images and videos (supports file uploads) |
| **Break Screen** | Switch to "Be Right Back" or intermission screens |
| **Scrolling Text** | Ticker-style horizontal scrolling text |
| **Scene Management** | Organize content using tabs (scenes) |
| **Global Off** | Hide all active content with a single click |
| **Real-time Sync** | Instant updates from the control panel to OBS using WebSockets |

---

## Environment

| Software | Version | Note |
|---|---|---|
| Python | 3.8+ | Standard on macOS |
| websockets | 11.0+ | See `requirements.txt` |
| Google Chrome / Chromium | Latest | For the Control Panel |
| OBS Studio | Any | Requires Browser Source support |

---

## Setup (First time only)

The `websockets` library for Python is required. Run the following command in your terminal or command prompt:

```bash
pip3 install websockets
```

---

## OBS Configuration

1. Open OBS Studio.
2. Add a new **Browser Source** in your scene.
3. Set the URL to `http://localhost:5500/obs_display.html`.
4. Set Width and Height to match your streaming resolution (e.g., 1920 x 1080).
5. Ensure "Shutdown source when not visible" is **unchecked** to maintain the connection.

---

## Architecture

```
┌─────────────────────┐     WebSocket      ┌─────────────────────┐
│   PonCast.html      │ ─────────────────▶ │   server.py         │
│  (Control Panel)    │                    │  (Relay Server)      │
└─────────────────────┘                    └──────────┬──────────┘
                                                       │ WebSocket
                                                       ▼
                                           ┌─────────────────────┐
                                           │  obs_display.html   │
                                           │  (OBS Display Layer) │
                                           └─────────────────────┘
```

### Server Configuration

| Port | Role |
|---|---|
| 5500 | HTTP Server (Static files + File uploads) |
| 5501 | WebSocket Server (Message relay between clients) |

---

## Project Structure

```
PonCast/
├── server.py              # HTTP & WebSocket relay server
├── start.command          # macOS launch script
├── requirements.txt       # Python dependencies
├── .gitignore
├── README.md              # English documentation (This file)
├── README.ja.md           # Japanese documentation
└── public/
    ├── PonCast.html       # Main Control Panel
    ├── obs_display.html   # OBS Display Layer
    └── uploads/           # Uploaded media files
```

---

## Stopping the Server

- **If launched via `start.command`:** Press `Ctrl+C` in the Terminal window.
- **Manual Launch:** Press `Ctrl+C`.

---

## License

MIT License — See [LICENSE](LICENSE) for details.
