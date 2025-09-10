const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/status', (req, res) => {
  res.status(200).send('OK api administracion');
});

app.listen(PORT, () => {
  console.log(`Servidor de status escuchando en http://localhost:${PORT}`);
});