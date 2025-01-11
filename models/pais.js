import { DataTypes } from "sequelize";
import { sequelize } from "../database/db2.js";


const pais = sequelize.define('pais',{

    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
    },
    nombre:{
        type:DataTypes.STRING,
    }

},{
    tableName:'pais',
    timestamps:false,
}
)

export default pais