# 🪖 SANDF Clan

A web-based platform for the **SANDF (South African National Defence Force) Clan** — built to represent and connect clan members through a dedicated online presence.

## 🌐 Overview

The SANDF Clan website serves as the digital home for the SANDF gaming clan. It is hosted via **Firebase Hosting** and built using modern front-end web technologies, providing a clean and engaging experience for clan members and visitors alike.

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML | Page structure and content |
| CSS | Styling and layout |
| JavaScript | Interactivity and dynamic content |
| Firebase | Hosting and backend services |

## 📁 Project Structure

```
SANDF-Clan/
├── main/               # Main source files (HTML, CSS, JS)
├── .vscode/            # VS Code workspace settings
├── firebase.json       # Firebase hosting configuration
├── .firebaserc         # Firebase project aliases
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Firebase CLI](https://firebase.google.com/docs/cli) installed globally

```bash
npm install -g firebase-tools
```

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Maybach-Zee/SANDF-Clan.git
   cd SANDF-Clan
   ```

2. Open the project in your editor and serve locally, or use the Firebase local emulator:
   ```bash
   firebase serve
   ```

3. Visit `http://localhost:5000` in your browser.

### Deployment

Deploy to Firebase Hosting:

```bash
firebase login
firebase deploy
```

## 📌 Features

- Clan identity and branding
- Responsive web design
- Fast static hosting via Firebase CDN

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
