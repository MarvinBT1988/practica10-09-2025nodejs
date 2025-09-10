´´ sql
CREATE DATABASE seguridad
    DEFAULT CHARACTER SET = 'utf8mb4';
use seguridad;
    CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO usuarios (nombre, apellido, email, contraseña) VALUES ('Admin', 'Root', 'admin@ejemplo.com', '12345');
select * from usuarios;
