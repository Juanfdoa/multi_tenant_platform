import { Request, Response } from "express";
import { RecordService } from "../../application/services/RecordService";
import { CreateRecordDto } from "../../application/dtos/record/CreateRecordDto";


export class RecordController {

    constructor(
        private readonly recordService: RecordService
    ) {}

    async getAll(req: Request ,res: Response): Promise<void> 
    {
        const limit = Number(req.query.limit ?? 10);
        const offset = Number(req.query.offset ?? 0);

        const records = await this.recordService.getAllByTenant( req.tenant.id, limit, offset);
        res.status(200).json(records);
    }


    async create( req: Request,res: Response): Promise<void> 
    {
        const dto = new CreateRecordDto(
            req.body.name,
            req.body.description
        );

        const created = await this.recordService.create(req.tenant.id, dto);

        res.status(201).json(created);
    }
}