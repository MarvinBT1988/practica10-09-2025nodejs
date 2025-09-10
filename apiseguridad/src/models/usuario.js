const db = require("../config/database");
exports.getAllUsers = async () => {
    try {
        const [usuarios] = await db.execute('SELECT * FROM usuarios');
        return usuarios; // Devuelve todos los usuarios, no solo el primero
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        throw error; // Propaga el error para que pueda ser manejado en la ruta
    }
};