import { BaseEntity } from "./BaseEntity";

export class Record extends BaseEntity{

    constructor(
        id: string,
        public readonly tenantId: string,
        public readonly name: string,
        public readonly description: string,
        public readonly isActive: boolean,
        public readonly createdAt: Date,
        public readonly updatedAt: Date
    ) {
        super(id);
     }

}