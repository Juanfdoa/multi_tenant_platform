import { IRecordRepository } from "../../domain/repositories/IRecordRepository";
import { Record } from "../../domain/entities/Record";
import { prisma } from "../database/prisma";

export class RecordRepository implements IRecordRepository {

    async getAllByTenant(tenantId: string, limit:number, offset: number): Promise<Record[]> {

        const records = await prisma.record.findMany({
            where: {
                tenantId
            },
            take: limit,
            skip: offset,
            orderBy:{
                createdAt:"desc"
            }
        });

        return records.map(r => new Record(
            r.id,
            r.tenantId,
            r.name!,
            r.description!,
            r.isActive!,
            r.createdAt!,
            r.updatedAt!
        ));
    }

    async getById(id: string): Promise<Record | null> {

        const record = await prisma.record.findUnique({
            where: { id }
        });

        if (!record) {
            return null;
        }

        return new Record(
            record.id,
            record.tenantId,
            record.name!,
            record.description!,
            record.isActive!,
            record.createdAt!,
            record.updatedAt!
        );
    }

    async create(record: Record): Promise<Record> {
        const createdRecord = await prisma.record.create({
            data: {
                id: record.id,
                tenantId: record.tenantId,
                name: record.name,
                description: record.description,
                isActive: record.isActive,
                createdAt: record.createdAt,
                updatedAt: record.updatedAt
            }
        });

        return new Record(
            createdRecord.id,
            createdRecord.tenantId,
            createdRecord.name!,
            createdRecord.description!,
            createdRecord.isActive!,
            createdRecord.createdAt!,
            createdRecord.updatedAt!
        );
    }

    async update(record: Record): Promise<Record> {
        throw new Error("Not implemented");
    }

    async delete(id: string): Promise<void> {
        throw new Error("Not implemented");
    }

}