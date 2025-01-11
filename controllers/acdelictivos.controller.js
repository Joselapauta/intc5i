import config from '../config.js'

export const acdelictivos = (req, res)=>{

    try{
       
        var DataUsuario = req.sessionData;
        res.render("actosDelictivos/actosDelictivos",{DataUsuario})

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
    

}
