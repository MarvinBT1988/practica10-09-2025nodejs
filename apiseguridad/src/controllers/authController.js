const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require("../models/usuario"); // Importa el modelo de usuario
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Verificar si el usuario existe en la base de datos por email
        const usuario = await userModel.getUserByEmail(email);
        console.log(usuario);
        if (!usuario) {
            // No se debe especificar si es el email o la contraseña la que es incorrecta para evitar enumeración de usuarios
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // 2. Comparar la contraseña ingresada con el hash almacenado
        const isMatch = await bcrypt.compare(password, usuario.contraseña);

        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // 3. Si las credenciales son correctas, crear el token JWT
        const payload = {
            id: usuario.id,
            email: usuario.email
        };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '8h' });

        // Enviar la respuesta con el token y el email del usuario
        res.status(200).json({ token: token, email: usuario.email });

    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Se omite la función de registro aquí, ya que la has solicitado en un controlador aparte.
