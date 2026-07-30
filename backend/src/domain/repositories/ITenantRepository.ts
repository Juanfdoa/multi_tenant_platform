import { Tenant } from "../entities/Tenant";

export interface ITenantRepository {
    getById(id: string): Promise<Tenant | null>;
}