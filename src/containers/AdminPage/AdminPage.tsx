import { Link } from "react-router-dom";
import './AdminPage.css';

export function AdminPage () {
    return <div className="adminContent">
        <Link to='/addNewStudent'>Добавить нового ученика</Link>
    </div>
}