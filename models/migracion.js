import { DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';
import provincias from "./provincias.js";
import Instituciones from "./instituciones.js";
import comandoconjunto from "./comandoconjunto.js";
import nacionalidades from "./nacionalidades.js";
import pais from "./pais.js";

//no completado 


const detencion_migracion = sequelize.define('detencion_migracion',{

    id:{
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: true
    },
    amenaza:{
        type: DataTypes.STRING
    },
    fecha:{
        type:DataTypes.DATEONLY
    },
    tipoeventualidad:{
        type:DataTypes.STRING
    },
    nacionalidad_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: nacionalidades,
            key: 'id'
        }
    },
    pais_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: pais,
            key: 'id'
        }
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
    timestamps:false,
    tableName: 'detencion_migracion', // We need to choose the model name
  },
)

pais.hasMany(detencion_migracion,{
    foreignKey: 'pais_id',
    sourceKey:'id'
})
detencion_migracion.belongsTo(pais,{
    foreignKey:'pais_id',
    targetKey:'id'
})

nacionalidades.hasMany(detencion_migracion,{
    foreignKey: 'nacionalidad_id',
    sourceKey:'id'
})

detencion_migracion.belongsTo(nacionalidades,{
    foreignKey:'nacionalidad_id',
    targetKey: 'id'
})

provincias.hasMany(detencion_migracion,{
    foreignKey:'provincia_id',
    sourceKey:'id'
})

detencion_migracion.belongsTo(provincias,{
    foreignKey:'provincia_id',
    targetKey:'id'
})

Instituciones.hasMany(detencion_migracion,{
    foreignKey:'institucion_id',
    sourceKey:'id'
});

detencion_migracion.belongsTo(Instituciones,{
    foreignKey:'institucion_id',
    targetKey:'id'
})

comandoconjunto.hasMany(detencion_migracion,{
    foreignKey:'comandoconjunto_id',
    sourceKey:'id'
});

detencion_migracion.belongsTo(comandoconjunto,{
    foreignKey:'comandoconjunto_id',
    targetKey:'id'
})

export default detencion_migracion;

