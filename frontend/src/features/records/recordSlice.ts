import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Record } from "../../types/Record";

interface RecordState {
    records: Record[];
}

const initialState: RecordState = {
    records: []
};

const recordSlice = createSlice({
    name: "records",
    initialState,
    reducers: {
        setRecords(state, action: PayloadAction<Record[]>) {
            state.records = action.payload;
        },

        clearRecords(state) {
            state.records = [];
        }

    }

});

export const {
    setRecords,
    clearRecords
} = recordSlice.actions;

export default recordSlice.reducer;