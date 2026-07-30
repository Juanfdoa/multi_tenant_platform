import "../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/useRedux";
import { login } from "../features/auth/authSlice";
import { setTenant } from "../features/tenant/tenantSlice";
import AuthService from "../services/AuthService";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    async function handleLogin() {
        try {
            setError("");
            const response = await AuthService.login({
                email
            });

            dispatch(login(response.token.token));
            dispatch(setTenant(response.token.tenant));
            navigate(`/${response.token.tenant.slug}/dashboard`);

            localStorage.setItem("token", response.token.token);
            localStorage.setItem("tenant", JSON.stringify(response.token.tenant));

        } catch (err: any) {
            setError(
                err.response?.data?.message ?? "An unexpected error occurred."
            );
        }

    }

    return (
        <div className="login-page">
            <div className="login-card">

                <h1 className="login-title">
                    Multi-Tenant Platform
                </h1>

                <div className="form-group">

                    <label className="form-label">
                        Email
                    </label>

                    <input
                        className="form-input"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                        }}
                    />

                </div>

                <button
                    className="login-button"
                    onClick={handleLogin}
                    disabled={!email}
                >
                    Login
                </button>

                {error && (
                    <span className="login-error">
                        {error}
                    </span>
                )}

            </div>

        </div>

    );

}