import { BaseEntity } from "./BaseEntity";

export class Tenant extends BaseEntity {

    constructor(
        id: string,
        public readonly name: string,
        public readonly slug: string,
        public readonly isActive: boolean,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {
        super(id);
     }

}