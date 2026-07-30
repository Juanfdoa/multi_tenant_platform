import { Request, Response } from "express";
import { AuthService } from "../../application/services/AuthService"

export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    async generateToken(req: Request, res: Response): Promise<void> {

        try {
            const { email } = req.body;
            const token = await this.authService.generateToken(email);
            res.status(200).json({ token });

        } catch (error) {
            if (error instanceof Error && error.message === "User not found") {
                res.status(404).json({
                    message: error.message
                });
                return;
            }
            res.status(500).json({
                message: "Internal server error"
            });
        }
    }

}