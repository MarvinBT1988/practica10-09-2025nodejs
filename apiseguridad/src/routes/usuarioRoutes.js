const express = require('express');
const router=express.Router();
const usuarioController=require("../controllers/usuarioController");
router.get('/all',usuarioController.getAllUsers);

module.exports=router;