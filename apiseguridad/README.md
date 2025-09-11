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
-- clave 12345
INSERT INTO usuarios (nombre, apellido, email, contraseña) VALUES ('Admin', 'Root', 'admin@ejemplo.com', '$2b$10$Dqi5.LJvChYkr27RsXVob.mkxHxA/F.Aoij9CPGvqIrU0/8GKhxga');
select * from usuarios;
