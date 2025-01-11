import { DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';
import provincias from "./provincias.js";
import Instituciones from "./instituciones.js";
import comandoconjunto from "./comandoconjunto.js";


const registro_aereo = sequelize.define('registro_aereo', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    amenaza: {
        type: DataTypes.STRING
    },
    paisprocedencia: {
        type: DataTypes.STRING
    },
    provincia_id: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Aseguramos que el campo rolId sea obligatorio
        references: {
            model: provincias,  // Referenciamos al modelo 'rolUser'
            key: 'id'  // La clave primaria de la tabla 'rolUser'
        }
    },

    institucionactuante_id: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Aseguramos que el campo rolId sea obligatorio
        references: {
            model: Instituciones,  // Referenciamos al modelo 'rolUser'
            key: 'id'  // La clave primaria de la tabla 'rolUser'
        }
    },

    comandoconjunto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Aseguramos que el campo rolId sea obligatorio
        references: {
            model: comandoconjunto,  // Referenciamos al modelo 'rolUser'
            key: 'id'  // La clave primaria de la tabla 'rolUser'
        }
    },

    cantidad: {
        type: DataTypes.INTEGER
    },
},
    {
        tableName: 'registro_aereo', // We need to choose the model name
    },
)


comandoconjunto.hasMany(registro_aereo, {
    foreignKey: 'comandoconjunto_id',
    sourceKey: 'id'
});

registro_aereo.belongsTo(comandoconjunto, {
    foreignKey: 'comandoconjunto_id',
    targetKey: 'id'
})


Instituciones.hasMany(registro_aereo, {
    foreignKey: 'institucionactuante_id',
    sourceKey: 'id'
});

registro_aereo.belongsTo(Instituciones, {
    foreignKey: 'institucionactuante_id',
    targetKey: 'id'
})

provincias.hasMany(registro_aereo, {
    foreignKey: 'provincia_id',
    sourceKey: 'id'
})

registro_aereo.belongsTo(provincias, {
    foreignKey: 'provincia_id',
    targetKey: 'id'
})
export default registro_aereo;

