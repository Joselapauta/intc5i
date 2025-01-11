
import rolUser from '../models/rol.js';
import usuarios from '../models/usuarios.js';
import bcrypt from 'bcrypt';


export const getIndex = async (req, res) => {
    
    try {

        var DataUsuario = req.sessionData;
        res.render('index', {DataUsuario})
       console.log(DataUsuario)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}  



export const adminuser = async (req, res) => {
    try {
        const usersData = await usuarios.findAll()
        //console.log(usersData[0].dataValues)
        var DataUsuario = req.sessionData;
        let data = { adminuser: 'active' }
        res.render('configuracion/adminuser', { data, DataUsuario })
    } catch (error) {
        res.status(401)
        res.send(error.message)

    }
}

// get data user
export const dataUser = async (req, res) => {
    try {
        
        const data = await usuarios.findAll({include: [{
            model: rolUser,
            attributes: ['nombre']
        }]})
        
        return res.status(200).json({
            status: 'success',
            message: 'Datos enviados correctamente',
            data: data,
        });
    } catch (error) {
        res.status(401)
        res.json({ error: error.message })
    }
    

}

export const dataUserByid = async (req, res) => {
const userid = req.params.id
    try {
        const data = await usuarios.findByPk(userid)


        return res.status(200).json({
            status: 'success',
            message: 'Datos enviados correctamente',
            data: data,
        });

    } catch (error) {
        res.status(401)
        res.json({ error: error.message })
    }
}

export const getSeguridad = async (req, res) => {

    try {

        var DataUsuario = req.sessionData;
        let data = { seguridad: 'active' }
        res.render('configuracion/seguridad', { data, DataUsuario })

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

export const getNotificaciones = async (req, res) => {

    try {
        var DataUsuario = req.sessionData;
        let data = { notificaciones: 'active' }
        res.render('configuracion/notificaciones', { data, DataUsuario })

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

export const getEditarPerfil = async (req, res) => {

    try {
        var DataUsuario = req.sessionData;
        res.render('perfil/editar-perfil', { DataUsuario })

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

export const getHeaders = async (req, res) => {
    try {
        const connection = await getConnection(); //obtenemos la conexion
        //Realizamos la consulta
        const parametrosSql = { "website_id": req.params['id'] }
        const sql = "SELECT cabeceras as 'headers' FROM monitoreo where id = (select MAX(id) from monitoreo where ?)"
        const consult = await connection.query(sql, parametrosSql)

        res.json(...consult)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}


export const postadminuser = async (req, res) => {
    try {
        const newUser = req.body;

//console.log(newUser)
        if (newUser.password !== newUser.rrpassword) {

            return res.status(400).json({
                status: 'error',
                message: 'Las contraseñas no coinciden',
            });
        }

        // Verifica si ya existe un usuario con el correo ingresado
        const userExists = await usuarios.findAll({
            where: {
                correo: newUser.email

            }
        });
        
        if (userExists.length > 0) {
            return res.status(409).json({
                status: 'error',
                message: 'Ya existe un usuario con el correo ' + newUser.email,
                
            });
        }
        const hashedPassword = await bcrypt.hash(newUser.password, 10);

        const dbRes = await usuarios.create({
            nombre: newUser.firstName,
            apellido: newUser.lastName,
            password: hashedPassword,
            rolId: Number(newUser.rolId),
            rango: newUser.rank,
            correo: newUser.email,
            estatus: newUser.estatus,
            
        });
 //console.log(dbRes)

        // Responde con éxito
        return res.status(201).json({
            status: 'success',
            message: 'Usuario agregado correctamente',
            data: dbRes,
        });

    } catch (error) {
       // console.log(error);
        return res.status(500).json({
            status: 'error',
            message: 'Error al registrar el usuario',
        });
    }
};

export const putadminuser = async (req, res) => {
    const iduser = req.params.id;
    const bodydate = req.body;
try{

    const dataUser = await usuarios.findByPk(iduser)

    if (!dataUser) {
        res.status(404).json({ status: 'error', message: 'Usuario no encontrado', data: iduser })
    }


    const infoUpdate = await usuarios.update({
        nombre: bodydate.firstName,
        apellido: bodydate.lastName,
        rolId: bodydate.rolId,
        rango: bodydate.rank,
        correo: bodydate.email,
        estatus: bodydate.estatus,
    },{where :{
        id: iduser
    }});
    

    if (!infoUpdate) {
        return res.status(400).json({ status: 'error', message: 'No se pudo actualizar el usuario' });
    }

    res.status(200).json({ status: 'success', message: 'Usuario modificado correctamente'});

}catch(error){

    console.error('Error al actualizar el usuario:', error);
    res.status(500).json({ status: 'error', message: 'Error interno del servidor' });
}};



//---------------------------------------ELIMINAR USUARIO--------------------------------------------


export const deleteUser = async (req, res) => {
    const userId = req.params.id; // Obtener el ID del usuario desde los parámetros de la solicitud

    try {
        // Intentar eliminar el usuario de la base de datos
        const resultDelete = await usuarios.destroy({
            where: { 
                id: userId
            }
        });

        // Verificar si se eliminó algún registro
        if (resultDelete === 0) {
            return res.status(202).json({ message: 'Usuario no encontrado' });
        }
        // Enviar una respuesta exitosa
        return res.status(200).json({ message: 'Usuario eliminado con éxito' });

    } catch (error) {
        // Manejo de errores
        console.error('Error al eliminar el usuario:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
    
};



