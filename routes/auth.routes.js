import { Router } from "express";
import { getAuth, logout, login, register, resetPassword, iniciarsesion } from "../controllers/auth.controller.js"
import { getIndex} from "../controllers/portal.controller.js"
import {verifySession} from "../middelwares/security.middelware.js"



const router = Router()

router.get('/auth', getAuth)
router.get('/logout', logout)
router.get('/login',  login)
router.get('/index', verifySession, getIndex)
router.post('/login',  iniciarsesion)
router.get('/register', register)
router.get('/forget-password', resetPassword)

export default router
