import { Router } from "express";
import{delitosambientales} from "../controllers/delitosambientales.controller.js";


const router = Router();

router.get('/delitosambientales', delitosambientales)


export default router