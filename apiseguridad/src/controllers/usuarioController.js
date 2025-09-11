const userModel = require('../models/usuario');

// Controlador para obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'No se pudieron obtener los usuarios.' });
    }
};

// Controlador para obtener un solo usuario por ID
exports.getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario.' });
    }
};

// Controlador para crear un nuevo usuario
exports.createUser = async (req, res) => {
    try {
        const newUser = await userModel.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo crear el usuario.' });
    }
};

// Controlador para actualizar un usuario
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await userModel.updateUser(req.params.id, req.body);
        if (!updatedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo actualizar el usuario.' });
    }
};

// Controlador para eliminar un usuario
exports.deleteUser = async (req, res) => {
    try {
        const success = await userModel.deleteUser(req.params.id);
        if (!success) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'No se pudo eliminar el usuario.' });
    }
};

