import { Router } from "express";
import { formmigracion } from "../controllers/migracion.js"


const router = Router()

router.get('/migracion', formmigracion)

export default router