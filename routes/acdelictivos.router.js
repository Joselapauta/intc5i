import { Router } from "express";
import { acdelictivos } from "../controllers/acdelictivos.controller.js"


const router = Router()

router.get('/delictivos', acdelictivos)

export default router