import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TenantState {
    id: string | null;
    slug: string | null;
    name: string | null;

}

const tenant = localStorage.getItem("tenant");

const initialState = tenant
    ? JSON.parse(tenant)
    : {
        id: "",
        slug: "",
        name: ""
    };

const tenantSlice = createSlice({
    name: "tenant",
    initialState,
    reducers: {

        setTenant(state, action: PayloadAction<TenantState>) {
            state.id = action.payload.id;
            state.slug = action.payload.slug;
            state.name = action.payload.name;
        },

        clearTenant(state) {
            state.id = null;
            state.slug = null;
            state.name = null;
        }
    }
});

export const { setTenant, clearTenant } = tenantSlice.actions;
export default tenantSlice.reducer;