import { Tenant, User } from "../../Infrastructure/Database/Prisma/client";

declare global {
    namespace Express {
        interface Request {
            tenant: Tenant;
            user: User;
        }
    }
}

export {};