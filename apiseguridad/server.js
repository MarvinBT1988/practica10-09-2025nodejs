const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser=require('body-parser');
const PORT = process.env.PORT || 3000;
const usuarioRoutes=require('./src/routes/usuarioRoutes');

app.use(bodyParser.json());

app.use('/usuarios',usuarioRoutes);

app.get('/status', (req, res) => {
  res.status(200).send('OK api seguridad');
});

app.listen(PORT, () => {
  console.log(`Servidor de status escuchando en http://localhost:${PORT}`);
});