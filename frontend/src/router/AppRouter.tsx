import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";

import PrivateLayout from "../layouts/PrivateLayout";

import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import RecordsPage from "../pages/RecordsPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login"element={<LoginPage />} />

                <Route element={<PrivateLayout />}>
                    <Route path="/:tenantSlug/dashboard" element={<DashboardPage />} />
                    <Route path="/:tenantSlug/records" element={<RecordsPage />}/>
                </Route>

                <Route element={<PrivateLayout />}>
                    <Route path="/:tenantSlug/dashboard" element={<DashboardPage />}/>
                    <Route path="/:tenantSlug/records" element={<RecordsPage />}/>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}