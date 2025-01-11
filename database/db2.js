import  {Sequelize}  from 'sequelize';
import config from '../config.js';
import bcrypt from 'bcrypt';





// Creamos la conexion a la base de datos

export const sequelize = new Sequelize(config.database,config.user, config.password, {
  host: config.host,
  dialect: config.dialect,/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  port: config.portdb
});

export const createFisrtUser = async (modeluser)=>{
  try {
    const userExists = await modeluser.findAll({
      where: {
        correo: "jm@hotmail.com"
      }
    })
  
    if(userExists.length > 0) return null
  
    const hashedPassword = await bcrypt.hash("111", 10);
  
    const dbRes = await modeluser.create({
      nombre: "Usuario",
      apellido: "Testing",
      password: hashedPassword,
      rolId: 3,
      rango: "Junior",
      correo: "jm@hotmail.com",
      estatus: "activo",
    });
    console.log("GENERANDO USUARIO ADMINISTRADOR POR DEFECTO", dbRes)
  } catch (error) {
    console.log(error)
  }



}
 