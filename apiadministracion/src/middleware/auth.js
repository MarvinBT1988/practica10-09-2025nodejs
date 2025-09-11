const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET =process.env.JWT_SECRET; 

exports.verifyToken = (req, res, next) => {
  // Obtener el token del header 'Authorization'
  const token = req.header('Authorization');

  // Verificar si el token existe
  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. No se proporcionó un token.' });
  }

  try {
    // Verificar y decodificar el token
    const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET);
    req.user = decoded; // Agregar los datos del usuario a la solicitud
    next(); // Pasar al siguiente middleware o controlador
  } catch (err) {
    res.status(401).json({ message: 'Token inválido o expirado.' });
  }
};