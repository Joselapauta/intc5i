import { DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';


const sectores=sequelize.define('sectores',{
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
    sequelize,
    modelName: 'sectores', // We need to choose the model name
  },
)



export default sectores;
