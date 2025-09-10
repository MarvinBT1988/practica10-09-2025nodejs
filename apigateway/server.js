const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());

// Ejemplo de proxy a un microservicio de usuarios
app.use('/seguridad', createProxyMiddleware({ 
    target: process.env.SEGURIDAD_SERVICE_URL, 
    changeOrigin: true 
}));

// Ejemplo de proxy a un microservicio de productos
app.use('/api/administracion', createProxyMiddleware({ 
    target: process.env.ADMIN_SERVICE_URL, 
    changeOrigin: true 
}));

app.get('/status', (req, res) => {
  res.status(200).send('OK api gateway');
});

app.listen(PORT, () => {
    console.log(`API Gateway escuchando en el puerto ${PORT}`);
});