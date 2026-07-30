import api from "../api/axios";
import type { Record } from "../types/Record";

class RecordService {

    async getAll(limit: number, offset: number): Promise<Record[]> {

        const response = await api.get<Record[]>("/records", {
            params: {
                limit,
                offset
            }
        });

        return response.data;
    }

}

export default new RecordService();