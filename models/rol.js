import { DataTypes } from "sequelize";
import { sequelize } from '../database/db2.js';

const rolUser = sequelize.define('rolUser', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true 
    }
}, {
    tableName: 'rolUser',
    timestamps: false
});


export default rolUser;
