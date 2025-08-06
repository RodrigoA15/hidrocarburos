import { Router } from "express";
import hidrucarburosRoutes from "./hidrucarburos.routes.js";

const router = Router();
const pathRoutes = "/api/v1";

router.use(`${pathRoutes}`, (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Hidrocarburos API",
  });
});
router.use(`${pathRoutes}/hidrocarburos`, hidrucarburosRoutes);

export default router;
