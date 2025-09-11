const express = require('express');
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

const authMiddleware = require('../middleware/auth');
router.get('/all', authMiddleware.verifyToken, usuarioController.getAllUsers);
router.get('/:id', authMiddleware.verifyToken, usuarioController.getUserById);
router.post('/', usuarioController.createUser);
router.put('/:id', authMiddleware.verifyToken, usuarioController.updateUser);
router.delete('/:id', authMiddleware.verifyToken, usuarioController.deleteUser);

module.exports = router;
