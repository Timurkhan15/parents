import { Link } from 'react-router-dom';
import './MainPage.css';

export function MainPage () {
    return <>
        <div className="mainContent">
            <Link to='/classList'>Список класса</Link>
            <Link to='/finances'>Финансы</Link>
        </div>
    </>
}