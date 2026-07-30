import "../../styles/records.css";
import { useEffect, useMemo, useState } from "react";
import RecordService from "../../services/RecordService";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { setRecords } from "../../features/records/recordSlice";
import RecordTable from "./RecordTable";

export default function RecordsPage() {
    const dispatch = useAppDispatch();
    const records = useAppSelector(
        state => state.records.records
    );

    const [search, setSearch] = useState("");

    useEffect(() => {
        async function loadRecords() {
            const data = await RecordService.getAll(10, 0);
            dispatch(setRecords(data));
        }

        loadRecords();

    }, [dispatch]);

    const filteredRecords = useMemo(() => {
        return records.filter(record =>
            record.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    }, [records, search]);

    return (
        <div className="records-container">
            <h1 className="records-title">
                Records
            </h1>

            <input
                className="search-input"
                type="text"
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <RecordTable
                records={filteredRecords}
            />

        </div>
    );
}