import { Router } from "express";
import { getHidrocarburos } from "../controllers/hidrocarburos/hidrocarburos.controller.js";

const router = Router();
router.get("/", getHidrocarburos);

export default router;
