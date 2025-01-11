import config from '../config.js'

export const alertas = (req, res)=>{

    try{
       
        var DataUsuario = req.sessionData;
        res.render("alertas/alertas",{DataUsuario})

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
    

}

