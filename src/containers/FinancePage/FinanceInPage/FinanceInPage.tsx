import { useEffect, useState } from 'react';
import './FinanceInPage.css';
import { api } from '../../../helpers/axiosApiClient';
import { Link } from 'react-router-dom';

interface InSumData {
    [key: string]: number;
}
  
interface ClassListData {
    [key: string]: {
      name: string;
    };
}

export function FinanceInPage () {
    const [inSum, setInSum] = useState<InSumData>({});
    const [classList, setClassList] = useState<ClassListData>({});

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
        {classId.map((studentId, i) =>         
            <div className='student' key={i}>
                <h4>{classList[studentId].name}</h4> 
                <p style={{background: inSum[studentId] > 0 ? 'green' : 'red'}}>{inSum[studentId]}</p>
            </div>
        )}
        <Link to='/finances'>Назад</Link>
    </div>
}