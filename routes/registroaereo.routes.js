import { Router } from "express";
import { registroaereo } from "../controllers/registroaereo.controller.js"


const router = Router()

router.get('/registroaereo', registroaereo)

export default router