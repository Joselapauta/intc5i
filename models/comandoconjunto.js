import { DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';


const comandoconjunto=sequelize.define('comandoconjunto',{
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
    tableName: 'comandoconjunto', // We need to choose the model name
  },
)



/////



export default comandoconjunto;
