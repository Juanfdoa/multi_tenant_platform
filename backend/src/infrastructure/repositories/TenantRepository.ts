import { ITenantRepository } from "../../domain/repositories/ITenantRepository";
import { Tenant } from "../../domain/entities/Tenant";
import { prisma } from "../database/prisma";

export class TenantRepository implements ITenantRepository {

    async getById(id: string): Promise<Tenant | null> {

        const tenant = await prisma.tenant.findFirst({
            where: {
                id
            }
        });

        if (!tenant) {
            return null;
        }

        return new Tenant(
            tenant.id,
            tenant.slug!,
            tenant.name!,
            tenant.isActive!,
            tenant.createdAt!,
            tenant.updatedAt!
        );
    }
}