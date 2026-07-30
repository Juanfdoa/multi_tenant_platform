import axios from "axios";
import { store } from "../store/store";

const api = axios.create({
    baseURL: "http://localhost:3000/api/v1"
});

api.interceptors.request.use(config => {
    const state = store.getState();
    const token = state.auth.token;
    const tenantId = state.tenant.id;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    if (tenantId) {
        config.headers["X-Tenant-ID"] = tenantId;
    }

    return config;
});

export default api;