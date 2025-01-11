import { Router } from "express";
import{decomisos} from "../controllers/decomisos.controller.js";


const router = Router();

router.get('/decomisos',decomisos)


export default router