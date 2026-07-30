import { v4 as uuid } from "uuid";
import { Record } from "../../domain/entities/Record";
import { IRecordRepository } from "../../domain/repositories/IRecordRepository";
import { CreateRecordDto } from "../dtos/record/CreateRecordDto";

export class RecordService {

    constructor(
        private readonly repository: IRecordRepository
    ) {}

    async getAllByTenant(tenantId: string, limit:number, offset: number): Promise<Record[]> {
        return await this.repository.getAllByTenant(tenantId, limit, offset);
    }

    async getById(id: string): Promise<Record | null> {
        return await this.repository.getById(id);
    }

    async create(tenantId: string, dto: CreateRecordDto): Promise<Record> {

        const record = new Record(
            uuid(),
            tenantId,
            dto.name,
            dto.description,
            true,
            new Date(),
            new Date()
        );

        return await this.repository.create(record);
    }
}