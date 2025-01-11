import { DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';


const nacionalidades=sequelize.define('nacionalidades',{
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
    tableName: 'nacionalidades', // We need to choose the model name
  },
)



export default nacionalidades