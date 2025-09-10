const usuario=require("../models/usuario");
exports.getAllUsers= async (req, res) => {    
    try {
        const usuarios=await usuario.getAllUsers();
       res.status(201).json(usuarios);
      // res.status(201).json([{nombre:"Mavin"}]);
    } catch (error) {
        res.status(500).json({ error: 'al obtener el usuario' });
    }
}