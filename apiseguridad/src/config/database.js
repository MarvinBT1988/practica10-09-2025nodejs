const mysql = require('mysql2');
require('dotenv').config();
const pool = mysql.createPool({
    host: process.env.HOSTDB, // Cambia si tu base de datos no está en localhost
    user: process.env.USERDB, // Tu usuario de MySQL
    password: process.env.PASSWORDDB, // Tu contraseña
    database: process.env.DATABASEDB, // Tu nombre de la base de datos
    port: process.env.PORTDB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();