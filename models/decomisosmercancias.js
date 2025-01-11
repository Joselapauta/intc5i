import { DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';
import provincias from "./provincias.js";
import Instituciones from "./instituciones.js";
import comandoconjunto from "./comandoconjunto.js";


const Decomisosmercancia= sequelize.define(
    "Decomisosmercancia",
    {

    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    tipoproducto:{
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
    institucion_id: {
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
    cantidad:{
        type: DataTypes.INTEGER
    },
},
 { 
    tableName: 'Decomisosmercancia'
  }
)


provincias.hasMany(Decomisosmercancia,{
    foreignKey:'provincia_id',
    sourceKey:'id'
})

Decomisosmercancia.belongsTo(provincias,{
    foreignKey:'provincia_id',
    targetKey:'id'
})

Instituciones.hasMany(Decomisosmercancia,{
    foreignKey:'institucion_id',
    sourceKey:'id'
});

Decomisosmercancia.belongsTo(Instituciones,{
    foreignKey:'institucion_id',
    targetKey:'id'
})

comandoconjunto.hasMany(Decomisosmercancia,{
    foreignKey:'comandoconjunto_id',
    sourceKey:'id'
});

Decomisosmercancia.belongsTo(comandoconjunto,{
    foreignKey:'comandoconjunto_id',
    targetKey:'id'
})

export default Decomisosmercancia
