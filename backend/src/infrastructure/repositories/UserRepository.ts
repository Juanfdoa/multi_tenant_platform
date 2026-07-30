import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "../../domain/entities/User";
import { prisma } from "../database/prisma";

export class UserRepository implements IUserRepository {

    async getByEmail(email: string): Promise<User | null> {

        const user = await prisma.user.findFirst({
            where: {
                email
            }
        });

        if (!user) {
            return null;
        }

        return new User(
            user.id,
            user.tenantId,
            user.name!,
            user.email!,
            user.role
        );
    }
}