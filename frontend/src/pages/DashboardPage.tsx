import "../styles/dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { logout } from "../features/auth/authSlice";
import { clearTenant } from "../features/tenant/tenantSlice";
import { clearRecords } from "../features/records/recordSlice";

export default function DashboardPage() {
    const tenant = useAppSelector(state => state.tenant);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function handleLogout() {
        dispatch(logout());
        dispatch(clearTenant());
        dispatch(clearRecords());

        localStorage.removeItem("token");
        localStorage.removeItem("tenant");

        navigate("/login");

    }

    return (
        <div className="dashboard-container">

            <header className="dashboard-header">
                <h1 className="dashboard-title">
                    Dashboard
                </h1>

                <button
                    className="logout-button"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </header>

            <div className="dashboard-card">
                <h2>
                    Welcome
                </h2>

                <p>
                    <strong>Tenant:</strong> {tenant.name}
                </p>

                <p>
                    <strong>Slug:</strong> {tenant.slug}
                </p>

                <div className="dashboard-actions">

                    <Link
                        className="dashboard-link"
                        to={`/${tenant.slug}/records`}
                    >
                        View Records
                    </Link>

                </div>

            </div>

        </div>

    );
}