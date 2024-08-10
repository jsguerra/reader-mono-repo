# A Library App Example
A monorepo for a library app separated into backend and frontend apps. The backend setup is an Express app with API endpoints. The frontend is built using Astro to consume and interact with the backend API.

## Installation
To install the application
```javascript
npm i
```
> If a fresh install a database needs to be setup. Follow the setup instructions in the Backend readme link below.
>
> In order for the frontend to work correctly the backend API should be up and running.

## Workspaces
`backend`

Workspace for the backend API: [Read me](./backend/README.md)

`frontend`

Workspace for the frontend view: [Read me](./frontend/README.md)

---

## Scripts
This repo uses npm workspaces. This means you can run a script targeting a specific workspace folder or go to that workspace folder and run a script.

How to install a package in a workspace
```javascript
npm i package --workspace="spacename"
```

The following scripts can be run from the root directory:

| Command | Description |
| ------- | ----------- |
| `dev:server` | Start backend server in development mode |
| `dev:client` | Start frontend in development mode |
| `start:server` | Start backend in production mode |
| `start:client` | Start frontend in development mode |
| `build` | builds frontend site for deployment |
| `preview` | Starts a production server to display deployment build |
| `astro` |  |
