import { Sequelize,Model,DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';

class municipio extends Model{}

municipio.init({
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
    modelName: 'municipio', // We need to choose the model name
  },
)
module.exports = municipio;
