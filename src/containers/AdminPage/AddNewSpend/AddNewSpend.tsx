import { Link, useNavigate } from 'react-router-dom';
import './AddNewSpend.css';
import { api } from '../../../helpers/axiosApiClient';

export function AddNewSpend () {
    const navigate = useNavigate();

    const addHandler = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e);
        
        const spend = (e.currentTarget.elements[0] as HTMLSelectElement).value;
        const sum = (e.currentTarget.elements[1] as HTMLSelectElement).value;
        const response = await api.get('/finances/spends.json');
        const data = await response.data;
        const curSum = parseInt(sum)
        const newData = {...data, [spend]: curSum};
        api.put('/finances/spends.json', newData);
        navigate('/admin');
    };

    return <form className='addNewSpend' onSubmit={(e) => addHandler(e)}>
        <h1>Добавить затраты</h1>
        <input type="text" placeholder='Затрата' required/>
        <input type="number" placeholder='Сумма' required/>
        <button type='submit'>Добавить</button>
        <Link to='/admin'>Назад</Link>
    </form>
}