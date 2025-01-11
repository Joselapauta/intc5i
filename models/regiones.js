import { DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';

 const regiones=sequelize.define('regiones',{
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
    tableName: 'regiones', // We need to choose the model name
  },
)





export default regiones