import { useEffect, useState } from 'react';
import './AddNewInSum.css';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../../helpers/axiosApiClient';

export function AddNewInSum () {
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
    
    const addHandler = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const id = (e.currentTarget.elements[0] as HTMLSelectElement).value;
        const sum = (e.currentTarget.elements[1] as HTMLSelectElement).value;
        
        if (id === 'Выберите ребенка') {
            alert('Вы не выбрали ребенка!');
        } else {
            const response = await api.get(`/finances/inSum/${id}.json`);
            const currentAmount = response.data || 0;
            const newAmount = currentAmount + parseFloat(sum);

            await api.put(`/finances/inSum/${id}.json`, newAmount);

            navigate('/admin');
        }
    };

    return <form className='addNewInSum' onSubmit={(e) => addHandler(e)}>
        <h1>Добавить пополнение</h1>
        <select defaultValue={'123'}>
            <option disabled value={'123'}>Выберите ребенка</option>
            {studentsId.map((id, i) => <option value={id} key={i}>{id}</option>)}
        </select>
        <input type="text" placeholder='Сумма' />
        <button type='submit'>Добавить</button>
        <Link to='/admin'>Назад</Link>
    </form>
}