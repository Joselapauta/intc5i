//usar el db2 para la conexion a la base de datos

import  Sequelize  from 'sequelize';
import config from './../config'


// Creamos la conexion a la base de datos
export const sequelize = new Sequelize('sira','root','',{
    dialect  : 'mysql',
    host     : 'localhost',
    port     : '3306'
    
    
  });

   

// Creo una funcion y retorno la conexion
const getConnection = async () => {

    return sequelize
   
}

// Retornamos el modulo de getConnection
module.exports = {
    getConnection,
    
    
}


