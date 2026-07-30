import { Record } from "../entities/Record";

export interface IRecordRepository {
    getAllByTenant(tenantId: string, limit:number, offset: number): Promise<Record[]>;
    getById(id: string): Promise<Record | null>;
    create(record: Record): Promise<Record>;
    update(record: Record): Promise<Record>;
    delete(id: string): Promise<void>;
}