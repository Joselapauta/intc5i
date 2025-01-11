import { DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';

const provincias=sequelize.define('provincias',{
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
    tableName: 'provincia', // We need to choose the model name
  },
)



export default provincias;
