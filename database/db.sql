--creando la base de datos
CREATE DATABASE abst;

--utilizando la base de datos
use abst;

--creando un tabla
CREATE TABLE jugador(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    apellido VARCHAR(25) NOT NULL,
    nombre VARCHAR(40) NOT NULL,
    club INT NOT NULL
);

-- mostrar tablas
SHOW TABLES;

--descripcion de las tablas
describe jugador;