# OctoFit Tracker Frontend

React 19 presentation tier for the OctoFit Tracker multi-tier application.

## API configuration

Define `VITE_CODESPACE_NAME` in `.env.local` when running in Codespaces:

```text
VITE_CODESPACE_NAME=your-codespace-name
```

When `VITE_CODESPACE_NAME` is set, API requests use:

```text
https://$VITE_CODESPACE_NAME-8000.app.github.dev/api/[resource]/
```

When `VITE_CODESPACE_NAME` is unset, the frontend safely falls back to:

```text
http://localhost:8000/api/[resource]/
```
