import { DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';
import regiones from '../models/regiones.js';
import comandoconjunto from "./comandoconjunto.js";
import Instituciones from "./instituciones.js";
import delito from "./delitos.js";
import nacionalidades from "./nacionalidades.js";
import provincias from "./provincias.js";
import TipoDecomiso from "./tipodecomisos.js";

const actosdelictivo = sequelize.define('actosdelictivos', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    comandoconjunto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Aseguramos que el campo rolId sea obligatorio

        references: {
            model: comandoconjunto,  // Referenciamos al modelo 'rolUser'
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
    titularinfoinstiuciones_id: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Aseguramos que el campo rolId sea obligatorio

        references: {
            model: Instituciones,  // Referenciamos al modelo 'rolUser'
            key: 'id'  // La clave primaria de la tabla 'rolUser'
        }
    },
    institucionfuenteinfo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Aseguramos que el campo rolId sea obligatorio

        references: {
            model: Instituciones,  // Referenciamos al modelo 'rolUser'
            key: 'id'  // La clave primaria de la tabla 'rolUser'
        }
    },
    region_id: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Aseguramos que el campo rolId sea obligatorio

        references: {
            model: regiones,  // Referenciamos al modelo 'rolUser'
            key: 'id'  // La clave primaria de la tabla 'rolUser'
        }
    },
    delito_id: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Aseguramos que el campo rolId sea obligatorio

        references: {
            model: delito,  // Referenciamos al modelo 'rolUser'
            key: 'id'  // La clave primaria de la tabla 'rolUser'
        }
    },
    nacionalidad_id: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Aseguramos que el campo rolId sea obligatorio

        references: {
            model: nacionalidades,  // Referenciamos al modelo 'rolUser'
            key: 'id'  // La clave primaria de la tabla 'rolUser'
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
    
    tipodecomiso_id: {
        type: DataTypes.INTEGER,
        allowNull: false,  // Aseguramos que el campo rolId sea obligatorio

        references: {
            model: TipoDecomiso,  // Referenciamos al modelo 'rolUser'
            key: 'id'  // La clave primaria de la tabla 'rolUser'
        }
    },
        cantidad_detenidos: {
            type: DataTypes.INTEGER
        },
        operativos_realizados: {
            type: DataTypes.INTEGER
        },

        cantidad: {
            type: DataTypes.INTEGER
        },

        usuario: {
            type: DataTypes.STRING
        },

        estatus: {
            type: DataTypes.BOOLEAN
        },
    
},
    {
        tableName: 'actosdelictivos', // We need to choose the model name
    },
)
TipoDecomiso.hasMany(actosdelictivo,{
    foreignKey:'tipodecomiso_id',
    sourceKey:'id'
});

actosdelictivo.belongsTo(TipoDecomiso,{
    foreignKey:'tipodecomiso_id',
    targetKey:'id'
})


provincias.hasMany(actosdelictivo,{
    foreignKey:'provincia_id',
    sourceKey:'id'
})

actosdelictivo.belongsTo(provincias,{
    foreignKey:'provincia_id',
    targetKey:'id'
})

nacionalidades.hasMany(actosdelictivo,{
    foreignKey:'nacionalidad_id',
    sourceKey:'id'
});

actosdelictivo.belongsTo(nacionalidades,{
    foreignKey:'nacionalidad_id',
    targetKey:'id'
});

delito.hasMany(actosdelictivo,{
    foreignKey:'delito_id',
    sourceKey:'id'
});

actosdelictivo.belongsTo(delito,{
     foreignKey:'delito_id',
    targetKey:'id'
})

regiones.hasMany(actosdelictivo,{
    foreignKey:'region_id',
    sourceKey:'id'
});

actosdelictivo.belongsTo(regiones,{
    foreignKey:'region_id',
    targetKey:'id'
})

comandoconjunto.hasMany(actosdelictivo,{
    foreignKey:'comandoconjunto_id',
    sourceKey:'id'
});

actosdelictivo.belongsTo(comandoconjunto,{
    foreignKey:'comandoconjunto_id',
    targetKey:'id'
})

Instituciones.hasMany(actosdelictivo,{
    foreignKey:'institucionactuante_id',
    sourceKey:'id'
});

actosdelictivo.belongsTo(Instituciones,{
    foreignKey:'institucionactuante_id',
    targetKey:'id'
})

Instituciones.hasMany(actosdelictivo,{
    foreignKey:'titularinfoinstiuciones_id',
    sourceKey:'id'
});

actosdelictivo.belongsTo(Instituciones,{
    foreignKey:'titularinfoinstiuciones_id',
    targetKey:'id'
})

Instituciones.hasMany(actosdelictivo,{
    foreignKey:'institucionfuenteinfo_id',
    sourceKey:'id'
});

actosdelictivo.belongsTo(Instituciones,{
    foreignKey:'institucionfuenteinfo_id',
    targetKey:'id'
})

export default actosdelictivo
