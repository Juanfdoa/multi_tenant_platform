import "../../styles/records.css";
import type { Record } from "../../types/Record";

interface Props {
    record: Record;
}

function RecordRow({ record }: Props) {

    return (
        <tr>
            <td>{record.name}</td>
            <td>{record.description}</td>
            <td className={record.isActive ? "status-active" : "status-inactive" } >
                {record.isActive ? "Active" : "Inactive"}
            </td>
        </tr>
    );

}

export default RecordRow;