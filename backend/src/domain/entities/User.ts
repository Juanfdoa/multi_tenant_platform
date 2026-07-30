import { BaseEntity } from "./BaseEntity";

export class User extends BaseEntity{

    constructor(
        id: string,
        public readonly tenantId: string,
        public readonly name: string,
        public readonly email: string,
        public readonly role: string
    ) { 
        super(id);
     }

}