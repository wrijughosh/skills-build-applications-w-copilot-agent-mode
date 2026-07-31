import express from 'express';

import { apiBaseUrl, port } from './config/apiUrl.js';
import './config/database.js';
import apiRouter from './routes/api.js';

const app = express();

app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', apiBaseUrl });
});

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening at ${apiBaseUrl}`);
});