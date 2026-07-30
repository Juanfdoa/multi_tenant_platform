import { Router } from "express";
import { identifyTenant } from "../middlewares/identifyTenant";
import { checkAuth } from "../middlewares/checkAuth";
import { recordController } from "../../config/dependencies";

const router = Router();

router.use(identifyTenant);


router.get(
    "/", 
    identifyTenant, 
    checkAuth(["ADMIN","USER"]),
    recordController.getAll.bind(recordController));


router.post(
    "/", 
    identifyTenant, 
    checkAuth(["ADMIN"]),
    recordController.create.bind(recordController));

export default router;