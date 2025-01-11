import { DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';
import provincias from "./provincias.js";
import Instituciones from "./instituciones.js";
import sectores from "./sectores.js";

// Definición del modelo 'armasY_municiones'
const ArmasYMuniciones = sequelize.define('armasY_municiones', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    pistolas: {
        type: DataTypes.INTEGER,
        defaultValue: 0 // Valor por defecto para mayor claridad
    },
    rifles: {
        type: DataTypes.INTEGER,
        defaultValue: 0 // Valor por defecto
    },
    provincia_id: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Aseguramos que el campo rolId sea obligatorio
        references: {
            model: provincias,  // Referenciamos al modelo 'rolUser'
            key: 'id'  // La clave primaria de la tabla 'rolUser'
        }
    },
    institucion_id: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Aseguramos que el campo rolId sea obligatorio
        references: {
            model: Instituciones,  // Referenciamos al modelo 'rolUser'
            key: 'id'  // La clave primaria de la tabla 'rolUser'
        }
    },
    sector_id: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Aseguramos que el campo rolId sea obligatorio
        references: {
            model: sectores,  // Referenciamos al modelo 'rolUser'
            key: 'id'  // La clave primaria de la tabla 'rolUser'
        }
    },
    totalMuniciones: {
        type: DataTypes.INTEGER,
        defaultValue: 0 // Valor por defecto
    },
    totalPorInstitucion: {
        type: DataTypes.INTEGER,
        defaultValue: 0 // Valor por defecto
    },
    totalArmas: {
        type: DataTypes.INTEGER,
        defaultValue: 0 // Valor por defecto
    },
    total: {
        type: DataTypes.STRING,
        allowNull: true // Permitir nulos si es necesario
    },
}, {
    tableName: 'armasmunicione', // Nombre de la tabla en la base de datos
});

sectores.hasMany(ArmasYMuniciones,{
    foreignKey:'sector_id',
    sourceKey:'id'
});

ArmasYMuniciones.belongsTo(sectores,{
    foreignKey:'sector_id',
    targetKey:'id'
})

provincias.hasMany(ArmasYMuniciones,{
    foreignKey:'provincia_id',
    sourceKey:'id'
})

ArmasYMuniciones.belongsTo(provincias,{
    foreignKey:'provincia_id',
    targetKey:'id'
})

Instituciones.hasMany(ArmasYMuniciones,{
    foreignKey:'institucion_id',
    sourceKey:'id'
});

ArmasYMuniciones.belongsTo(Instituciones,{
    foreignKey:'institucion_id',
    targetKey:'id'
})

// Exportar el modelo
export default ArmasYMuniciones;


