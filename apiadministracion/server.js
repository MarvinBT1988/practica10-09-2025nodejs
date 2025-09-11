const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser=require('body-parser');
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());

app.get('/status', (req, res) => {
  res.status(200).send('OK api administracion');
});

app.use('/test',require('./src/routes/testRoutes'));

app.listen(PORT, () => {
  console.log(`Servidor de status escuchando en http://localhost:${PORT}`);
});