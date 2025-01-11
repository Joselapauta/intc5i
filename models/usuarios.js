import { DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';
import rolUser from "./rol.js";

const usuarios = sequelize.define('usuarios', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false 
    },
     rolId: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Aseguramos que el campo rolId sea obligatorio
        references: {
            model: rolUser,  // Referenciamos al modelo 'rolUser'
            key: 'id'  // La clave primaria de la tabla 'rolUser'
        }
    },
    rango: {
        type: DataTypes.STRING,
        allowNull: true
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    ulimologin: {
        type: DataTypes.DATE,
        allowNull: true
    },
    estatus: {
        type: DataTypes.ENUM('activo', 'inactivo'),
        defaultValue: 'activo' 
    }
}, {
    tableName: 'usuarios',

});

// Relación: Un rol tiene muchos usuarios
rolUser.hasMany(usuarios, {
    foreignKey: 'rolId',  // Clave foránea en la tabla 'usuarios'
    sourceKey: 'id'  // Clave primaria en la tabla 'rolUser'
});

// Relación: Un usuario pertenece a un rol
usuarios.belongsTo(rolUser, {
    foreignKey: 'rolId',  // La clave foránea en 'usuarios'
    targetKey: 'id'  // La clave primaria en 'rolUser'
});


export default usuarios;
