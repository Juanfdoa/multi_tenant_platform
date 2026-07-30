import { RecordRepository } from "../infrastructure/repositories/RecordRepository";
import { RecordService } from "../application/services/RecordService";
import { RecordController } from "../presentation/controllers/RecordController";

export const recordRepository = new RecordRepository();
export const recordService = new RecordService(recordRepository);
export const recordController = new RecordController(recordService);