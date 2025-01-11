import jwt from 'jsonwebtoken';
import config from '../config.js';

const obtenerIniciales = (nombreCompleto) => {
    // Dividimos el nombre completo en palabras
    const partes = nombreCompleto.trim().split(' ');
  
    // Obtenemos la primera letra del primer nombre y la primera letra del primer apellido
    const inicialNombre = partes[0].charAt(0).toUpperCase();
    const inicialApellido = partes[1] ? partes[1].charAt(0).toUpperCase() : '';
  
    // Concatenamos las iniciales y las retornamos
    return inicialNombre + inicialApellido;
  }

 export const verifytoken = (token) =>{
    try {

        const key = config.secret_key ?? '';
        const data = jwt.verify(token, key);

        if(data){
            return data;
        }else{
            return false
        }

    } catch (error) {
        console.error('Token inválido:', error.message);
        return false;
    }
    
}


export const verifySession = (req, res, next) => {

        try{
        if(!req.cookies.session)
        {
            return res.redirect('login')   
        }
        const dataToken = verifytoken(req.cookies.session);

        if(!dataToken)
        {
            return res.redirect('login')
        }
  

        var nombre = obtenerIniciales(dataToken.data.first_name);
        dataToken.data.iniciales = nombre;
        req.sessionData = dataToken.data;
 // console.log(req.sessionData.iniciales)
        next()

    } catch (error) {

        console.error('Error al verificar session', error.message);
        res.redirect('login')
    }
}



/*
export const verifySession = (req, res, next,token) => {
    const key = config.secret_key ?? '';
    const tokens = req.cookies.session
if(!tokens){
    return res.status(403).send('acceso no autorizado')
}
try{
const datat = jwt.verify(tokens, key)
res.render('index',datat)
}catch(error){
res.render('index')
}
next()
}
*/