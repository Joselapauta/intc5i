//import { verify, sign } from 'jsonwebtoken'
import JWT from 'jsonwebtoken';
import config from './../config.js'
import bcrypt from 'bcrypt';
import { createFisrtUser } from '../database/db2.js';
import usuarios from '../models/usuarios.js';

export const getAuth = (req, res) => {


}

export const logout = (req, res) => {

    res.clearCookie('session');
    res.redirect('login')
}

export const login = (req, res) => {

    res.render("login")

}

export const getLogin = (req, res) => {

    res.render('login')

}

export const register = (req, res) => {

    res.render("register")

}

export const resetPassword = (req, res) => {

    res.render('forget-password')
}


export const iniciarsesion = async (req, res) => {
    try {
        const { email, password } = req.body; // Desestructuración para obtener email y password
        // Buscar el usuario en la base de datos
        const user = await usuarios.findOne({ where: { correo: email } });

        // Verificar si el usuario existe
        if (!user) {
            return res.status(403).json({
                status: 'error',
                message: 'No se encontró un usuario registrado con este email',
            },
            createFisrtUser(usuarios)

            );
            
        }

        // Comparar la contraseña proporcionada con la almacenada
        const isPassCorrect = await bcrypt.compare(password, user.password); // Corregido: usar user.password

        // Verificar si la contraseña es correcta
        if (!isPassCorrect) {
            return res.status(403).json({
                status: "error",
                message: "Error al iniciar sesión: contraseña o correo incorrecto"
            });
        }

        const userFormated = {
            id: user.id,
            first_name: user.nombre,
            last_name: user.apellido,
            email: user.correo,
            status: user.estatus,
            rango: user.rango,
            rolId: user.rolId,
        };
//console.log(userFormated)
        const refreshToken = crearToken(userFormated);


        // Establecer la cookie con el token
        res.cookie('session', refreshToken, configurarCookie());

        // Respuesta exitosa
        return res.status(200).json({
            status: 'success',
            message: 'Inicio de sesión exitoso',
            data: refreshToken,
        });

    } catch (error) {
        console.error('Error al iniciar sesión:', error); // Manejo de errores
        return res.status(500).json({
            status: 'error',
            message: 'Error interno del servidor'
        });
    }
};


// Función para crear un token
export const crearToken = (data) => {
    try {
        const payload = { data };
        const options = { expiresIn: '1h' };
        return JWT.sign(payload, config.secret_key, options)
    } catch (error) {
        console.error(error)
        return false;
    }

};

// Función para configurar la cookie 
export const configurarCookie = () => {
    return {
        expires: new Date(Date.now() + config.jwtcookie * 24 * 60 * 60 * 1000), // Configuración correcta del tiempo
        path: '/',
        httpOnly: true, // La cookie no será accesible desde JavaScript
        secure: process.env.NODE_ENV === 'production', // Solo se envía por HTTPS en producción
        sameSite: 'Strict' // Previene el envío de cookies en solicitudes cruzadas 
    };

};

