import config from '../config.js'

export const registroaereo = (req, res)=>{

    try{
       
        
        res.render("registroaereo/registroaereo")

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
    

}

