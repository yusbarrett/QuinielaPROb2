# Quiniela World Cup 2026

A web application for predicting FIFA World Cup 2026 match results and competing with friends in prediction rankings.

## Tech Stack

- **Backend:** Node.js 24 LTS + Express
- **Frontend:** React 19 + TypeScript + Vite
- **Data:** JSON file-based storage
- **Deployment:** Microsoft Azure Web App

## Getting Started

### Prerequisites

- Node.js 24 LTS
- npm

### Installation

```bash
npm run install:all
```

### Development

```bash
npm run dev
```

This starts both the Express server (port 5000) and the Vite dev server (port 3000) concurrently.

### Production Build

```bash
npm run build
npm start
```

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/teams` | GET | Get all teams (optional `?group=A` filter) |
| `/api/teams/:id` | GET | Get single team |
| `/api/games` | GET | Get all games (optional `?group=A&matchday=1&date=2026-06-11` filters) |
| `/api/games/:id` | GET | Get single game |
| `/api/games/:id` | PUT | Update game result |
| `/api/predictions` | GET | Get predictions (optional `?userId=u1&gameId=g1` filters) |
| `/api/predictions` | POST | Create/update prediction |
| `/api/rankings` | GET | Get prediction rankings |
| `/api/users` | GET | Get all users |

## Azure Deployment

This project is configured for deployment to Azure Web App:

1. Create an Azure Web App with Node.js 24 LTS runtime
2. Set `SCM_DO_BUILD_DURING_DEPLOYMENT` to `true` in App Settings
3. Set `NODE_ENV` to `production`
4. Deploy via GitHub Actions or Azure CLI

## Project Structure

```
├── client/              # React frontend
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # Shared components
│   │   ├── pages/       # Page components
│   │   ├── styles/      # CSS styles
│   │   ├── App.tsx      # Main app with routing
│   │   └── main.tsx     # Entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── server/              # Express backend
│   └── index.js         # API server
├── data/
│   └── db.json          # JSON database
├── azure.json           # Azure deployment config
└── package.json         # Root package.json
```
