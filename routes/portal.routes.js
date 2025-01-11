import { Router } from "express";
import  {getIndex, dataUserByid, deleteUser,getSeguridad, getNotificaciones,getEditarPerfil,adminuser,postadminuser,putadminuser,getHeaders, dataUser}  from "./../controllers/portal.controller.js"
//import { verifyrol } from "../middelwares/autorization.js";
import  {verifySession}  from '../middelwares/security.middelware.js'

const router = Router();

//router.get('/general/:id', securityMiddelware.verifyToken, portalController.getPortal)

router.get('/',verifySession, getIndex)
router.get('/seguridad', verifySession, getSeguridad)
router.get('/notificaciones', verifySession, getNotificaciones)
router.get('/perfil',verifySession, getEditarPerfil)
router.get('/adminuser',  verifySession, adminuser)
router.post('/adminuser',  postadminuser)
router.put('/adminuser/:id', putadminuser)
router.get('/adminuser/:id', dataUserByid)
router.delete('/adminuser/:id', deleteUser)
router.get('/cabeceras/:id', getHeaders)
router.get('/api/users/all', dataUser)

export default router
