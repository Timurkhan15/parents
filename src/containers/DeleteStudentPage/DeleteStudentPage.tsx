import { useEffect, useState } from 'react';
import './DeleteStudentPage.css';
import { api } from '../../helpers/axiosApiClient';
import { Link, useNavigate } from 'react-router-dom';

export function DeleteStudentPage () {
    const [classList, setClassList] = useState<[]>([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const getClassList = async() => {
            const response = await api.get('/classList.json');
            const data = await response.data
            setClassList(data);
        };

        getClassList();
    }, []);
    
    const studentsId = Object.keys(classList);
    
    const deleteHandler = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = e.target[0].value;
        if (id === 'Выберите ребенка') {
            alert('Вы не выбрали ребенка!');
        } else {
            api.delete(`/classList/${id}.json`);
            navigate('/admin');
        }
    };

    return <form className='deleteForm' onSubmit={(e) => deleteHandler(e)}>
        <h1>Удалить ребенка</h1>
        <select>
            <option disabled selected>Выберите ребенка</option>
            {studentsId.map((id) => <option value={id}>{id}</option>)}
        </select>
        <button type='submit'>Удалить</button>
        <Link to='/admin'>Назад</Link>
    </form>
}
