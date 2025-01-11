import { Router } from "express";
import { alertas } from "../controllers/alertas.controller.js"
import {verifySession} from "../middelwares/security.middelware.js"


const router = Router()

router.get('/alertas', verifySession,alertas);

export default router