const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (_req, res) => {
  res.json({ message: 'Hello from Example1 Node.js API' });
});

app.get('/healthz', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/items/:id', (req, res) => {
  const id = Number(req.params.id);
  res.json({ id, name: `item-${id}` });
});

app.listen(port, () => {
  console.log(`listening on :${port}`);
});
