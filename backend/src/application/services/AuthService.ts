import jwt from "jsonwebtoken";
import { AuthResponseDto } from "../dtos/auth/AuthResponseDto";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { ITenantRepository } from "../../domain/repositories/ITenantRepository";

export class AuthService {

    constructor(
        private readonly userRepository: IUserRepository,
        private readonly tenantRepository: ITenantRepository
    ) {}

    async generateToken(email: string): Promise<AuthResponseDto> {
        const user = await this.userRepository.getByEmail(email);

        if (!user) {
            throw new Error("User not found");
        }

        const tenant = await this.tenantRepository.getById(user.tenantId)

        if (!tenant) {
            throw new Error("Tenant not found");
        }

        const token = jwt.sign(
            {
                userId: user.id,
                tenantId: user.tenantId,
                role: user.role
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: "1h"
            }
        );

        return new AuthResponseDto(
            token,
            {
                id: tenant.id,
                slug: tenant.slug,
                name: tenant.name
            }
        );
    }

}