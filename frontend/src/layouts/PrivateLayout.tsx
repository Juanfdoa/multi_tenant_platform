import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";

export default function PrivateLayout() {

    const { tenantSlug } = useParams();

    const isAuthenticated = useAppSelector(
        state => state.auth.isAuthenticated
    );

    const tenant = useAppSelector(
        state => state.tenant
    );

    if (!tenantSlug) {
        return <Navigate to="/login" replace />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (tenant.slug !== tenantSlug) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}