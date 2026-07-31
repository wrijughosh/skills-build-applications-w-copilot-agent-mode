import express from 'express';
import cors from 'cors';
import './config/database.js';

const app = express();
const PORT = 8000;

const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${PORT}`;

app.use(cors());
app.use(express.json());

app.get('/api/users', (_req, res) => {
  res.json([]);
});

app.get('/api/activities', (_req, res) => {
  res.json([]);
});

app.get('/api/teams', (_req, res) => {
  res.json([]);
});

app.get('/api/leaderboard', (_req, res) => {
  res.json([]);
});

app.get('/api/workouts', (_req, res) => {
  res.json([]);
});

app.listen(PORT, () => {
  console.log(`Server running on ${baseUrl}`);
});

export default app;
