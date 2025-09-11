const db = require("../config/database");
const bcrypt = require("bcryptjs");
// --- CREATE ---
exports.createUser = async (usuario) => {
    try {
        const { nombre, apellido, email, contraseña } = usuario;
          console.log({usuario});
        const hashedPassword = await bcrypt.hash(contraseña, 10);      
        // Ejecuta la consulta para insertar el nuevo usuario con la contraseña hasheada
        const [result] = await db.execute(
            'INSERT INTO usuarios (nombre, apellido, email, contraseña) VALUES (?, ?, ?, ?)',
            [nombre, apellido, email, hashedPassword]
        );
        return { id: result.insertId};
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
};


// --- READ ---
exports.getAllUsers = async () => {
    try {
        const [usuarios] = await db.execute('SELECT * FROM usuarios');
        return usuarios;
    } catch (error) {
        console.error('Error al obtener todos los usuarios:', error);
        throw error;
    }
};

exports.getUserById = async (id) => {
    try {
        const [usuarios] = await db.execute('SELECT * FROM usuarios WHERE id = ?', [id]);
        return usuarios[0];
    } catch (error) {
        console.error('Error al obtener usuario por ID:', error);
        throw error;
    }
};

// --- UPDATE ---
exports.updateUser = async (id, usuario) => {
    try {
        const { nombre, apellido, email, contraseña } = usuario;
        const [result] = await db.execute(
            'UPDATE usuarios SET nombre=?, apellido=?, email=?, contraseña=? WHERE id=?',
            [nombre, apellido, email, contraseña, id]
        );
        if (result.affectedRows === 0) {
            return null; // Devuelve null si no se encontró el usuario para actualizar
        }
        return { id, ...usuario };
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        throw error;
    }
};

// --- DELETE ---
exports.deleteUser = async (id) => {
    try {
        const [result] = await db.execute('DELETE FROM usuarios WHERE id = ?', [id]);
        return result.affectedRows > 0; // Devuelve true si se eliminó, false si no se encontró
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        throw error;
    }
};

// --- LOGIN ---
exports.getUserByEmail = async (email) => {
    try {
        const [usuarios] = await db.execute('SELECT * FROM usuarios WHERE email = ?', [email]);
        return usuarios[0];
    } catch (error) {
        console.error('Error al obtener usuario por Email:', error);
        throw error;
    }
};
