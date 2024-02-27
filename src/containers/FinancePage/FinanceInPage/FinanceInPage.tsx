import { useEffect, useState } from 'react';
import './FinanceInPage.css';
import { api } from '../../../helpers/axiosApiClient';
import { Link } from 'react-router-dom';

export function FinanceInPage () {
    const [inSum, setInSum] = useState<[]>([]);
    const [classList, setClassList] = useState<[]>([]);

    useEffect(() => {
        const getInSum = async() => {
            const response = await api.get('/finances/inSum.json');
            const inSumData = await response.data
            setInSum(inSumData);
        };

        const getClassList = async() => {
            const response = await api.get('/classList.json');
            const data = await response.data
            setClassList(data);
        };

        getInSum();
        getClassList();
    }, []);
    console.log(inSum);

    const classId = Object.keys(inSum);
    
    return <div className='inFin'>
        <h1>Пополнения</h1>
        {classId.map((studentId) =>         
            <div className='student'>
                <h4>{classList[studentId].name}</h4> 
                <p style={{background: inSum[studentId] > 0 ? 'green' : 'red'}}>{inSum[studentId]}</p>
            </div>
        )}
        <Link to='/finances'>Назад</Link>
    </div>
}