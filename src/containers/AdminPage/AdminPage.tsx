import { Link } from "react-router-dom";
import './AdminPage.css';

export function AdminPage () {
    return <div className="adminContent">
        <h1>Список класса</h1>
        <Link to='/addNewStudent'>Добавить нового ученика</Link>
        <Link to='/deleteStudent'>Удалить ученика</Link>
        <h1>Финансы</h1>
        <Link to='/addNewSpend'>Добавить новые затраты</Link>
        <Link to='/addNewInSum'>Добавить новое пополнение</Link>
    </div>
}