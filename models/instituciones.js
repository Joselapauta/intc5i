import { DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';


const Instituciones=sequelize.define('Instituciones',{
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
    tableName: 'Instituciones', // We need to choose the model name
  },
)







export default Instituciones;
