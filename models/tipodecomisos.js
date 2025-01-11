import { DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';


const TipoDecomiso=sequelize.define('TipoDecomiso',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    nombre:{
        type:DataTypes.STRING
    }
},
{
    timestamps:false,
        tableName: 'TipoDecomiso', // We need to choose the model name
  },
)




export default TipoDecomiso;
