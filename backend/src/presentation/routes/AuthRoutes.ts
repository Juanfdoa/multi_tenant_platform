import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { AuthService } from "../../application/services/AuthService";
import { UserRepository } from "../../infrastructure/repositories/UserRepository";
import { TenantRepository } from "../../infrastructure/repositories/TenantRepository";

const router = Router();

const userRepository = new UserRepository();
const tenantRepository = new TenantRepository();

const authService = new AuthService(
    userRepository,
    tenantRepository
);

const authController = new AuthController(authService);

router.post(
    "/token",
    authController.generateToken.bind(authController)
);

export default router;