import "../../styles/records.css";
import type { Record } from "../../types/Record";
import RecordRow from "./RecordRow";

interface Props {
    records: Record[];
}

export default function RecordTable({ records }: Props) {
    return (
        <table className="records-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {records.map(record => (
                    <RecordRow key={record.id} record={record}/>
                ))}
            </tbody>
        </table>
    );
}