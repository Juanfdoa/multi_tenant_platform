export interface LoginRequest {
    email: string;
}

export interface TenantDto {
    id: string;
    slug: string;
    name: string;
}

export interface LoginResponse {
    token: {
        token: string;
        tenant: TenantDto;
    };
}