import { DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';


const delito=sequelize.define('delito',{
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
    tableName: 'delito', // We need to choose the model name
  },
)



export default delito;