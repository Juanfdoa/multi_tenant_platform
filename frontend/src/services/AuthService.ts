import api from "../api/axios";
import type { LoginRequest, LoginResponse } from "../types/Auth";

class AuthService {

    async login(request: LoginRequest): Promise<LoginResponse> {

        const response = await api.post<LoginResponse>(
            "/auth/token",
            request
        );

        return response.data;
    }

}

export default new AuthService();