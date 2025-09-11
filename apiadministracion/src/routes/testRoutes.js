const express = require('express');
const router = express.Router();
const testController = require("../controllers/testController");

const authMiddleware = require('../middleware/auth');
router.get('/protegido', authMiddleware.verifyToken, testController.protegido);
router.get('/libre', testController.libre);

module.exports = router;