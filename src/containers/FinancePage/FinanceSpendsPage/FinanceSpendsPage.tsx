import { useEffect, useState } from 'react';
import './FinanceSpendsPage.css';
import { api } from '../../../helpers/axiosApiClient';
import { Link } from 'react-router-dom';

export function FinanceSpendsPage () {
    const [spends, setSpends] = useState<[]>([]);

    useEffect(() => {
        const getSpends = async() => {
            const response = await api.get('/finances/spends.json');
            const data = await response.data
            setSpends(data);
        };

        getSpends();
    }, []);

    const spendsId = Object.keys(spends);
    return <div className='spendsFin'>
        <h1>Затраты</h1>
        {spendsId.map((spendId) => <div className='spend'>
            <h4>{spendId}</h4>
            <p>{spends[spendId]}</p>
        </div>)}
        <Link to='/finances'>Назад</Link>
    </div>
}