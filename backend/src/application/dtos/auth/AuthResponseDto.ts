export class AuthResponseDto {

    constructor(
        public readonly token: string,
        public readonly tenant: {
            id: string;
            slug: string;
            name: string;
        }
    ) {}

}