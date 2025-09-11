const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser=require('body-parser');
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use('/usuarios',require('./src/routes/usuarioRoutes'));
app.use('/auth',require('./src/routes/authRoutes'));

app.get('/status', (req, res) => {
  res.status(200).send('OK api seguridad');
});

app.listen(PORT, () => {
  console.log(`Servidor de status escuchando en http://localhost:${PORT}`);
});