import { Link } from 'react-router-dom';
import { FinanceTable } from '../../components/FinanceTable/FinanceTable';
import './FinancePage.css';
import { api } from '../../helpers/axiosApiClient';
import { useEffect, useState } from 'react';

export function FinancePage () {
    const [spends, setSpends] = useState<[]>([]);
    const [inSum, setInSum] = useState<[]>([]);
    const [totalInSum, setTotalInSum] = useState<number>(0);
    const [totalSpends, setTotalSpends] = useState<number>(0);

    useEffect(() => {
        const getSpends = async() => {
            const response = await api.get('/finances/spends.json');
            const spendsData = await response.data
            setSpends(spendsData);
        };

        const getInSum = async() => {
            const response = await api.get('/finances/inSum.json');
            const inSumData = await response.data
            setInSum(inSumData);
        };

        getSpends();
        getInSum();

        const getFinances = () => {
            const totalSpends = Object.values(spends).reduce((sum, value) => sum + value, 0);
            const totalInSum = Object.values(inSum).reduce((sum, value) => sum + value, 0);
    
            setTotalInSum(totalInSum);
            setTotalSpends(totalSpends);
        };
    
        getFinances();
    }, [inSum, spends]);

    return <div className='finDiv'>
        <h2>Финансы</h2>
        <FinanceTable inSum={totalInSum} spends={totalSpends} />
        <div className="buttons">
            <Link to='/finances/in'>Пополнения</Link>
            <Link to='/finances/spends'>Затраты</Link>
            <Link to='/'>Назад</Link>
        </div>
    </div>
}