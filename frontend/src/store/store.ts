import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import tenantReducer from "../features/tenant/tenantSlice";
import recordReducer from "../features/records/recordSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tenant: tenantReducer,
        records: recordReducer
    }

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;