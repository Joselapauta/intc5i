import { Router } from "express";
import{armasymuniciones} from "../controllers/armasymuniciones.controller.js";


const router = Router();

router.get('/armasymuniciones', armasymuniciones)


export default router