import { useEffect, useState } from 'react';
import './FinanceSpendsPage.css';
import { api } from '../../../helpers/axiosApiClient';
import { Link } from 'react-router-dom';

interface SpendsData {
    [key: string]: number; 
}

export function FinanceSpendsPage () {
    const [spends, setSpends] = useState<SpendsData>({});

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
        {spendsId.map((spendId, i) => <div className='spend' key={i}>
            <h4>{spendId}</h4>
            <p>{spends[spendId]}</p>
        </div>)}
        <Link to='/finances'>Назад</Link>
    </div>
}