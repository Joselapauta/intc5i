import usuarios from '../models/usuarios.js';

export const verifyrol = (verificador) => {
    
    return async (req, res, next) => {
        const iduser = req.sessionData
//console.log(iduser)
        //console.log(iduser)
        try {
           
            const user = await usuarios.findOne({
                where: {
                    rolId: iduser.rolId 
                    
                }
            });
            //console.log('buscando error en el usuario')

            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            // Verificamos el rol del usuario
            if (user.rolId !== verificador) {
                console.error('Solo administrador de Usuarios');
                return res.status(403).json({ message: 'Acceso denegado: solo administradores' });
            }

            next(); // Llamamos a next() si todo está bien
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    };
};