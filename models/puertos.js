import { Sequelize,Model,DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';

class puerto extends Model{}

puerto.init({
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    nombre:{
        type:DataTypes.STRING
    },
    lat:{
        type:DataTypes.DECIMAL
    },
    long:{
        type:DataTypes.DECIMAL
    }
},
{
    timestamps:false,
    sequelize,
    modelName: 'puerto', // We need to choose the model name
  },
)
module.exports = puerto;
