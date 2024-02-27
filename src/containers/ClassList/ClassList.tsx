import { useEffect, useState } from 'react';
import { api } from '../../helpers/axiosApiClient';
import './ClassList.css';
import { Student } from '../../components/Student/Student';
import { Link } from 'react-router-dom';

export interface IStudent {
    name: string;
    parent: string;
    phone: string;
    id: string;
}

export function ClassList () {
    const [classList, setClassList] = useState<IStudent[]>([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await api.get('/classList.json');
            const fetchedData = Object.keys(response.data).map((key) => ({
                ...response.data[key],
                id: key,
            }));
            setClassList(fetchedData);
        };

        fetchData();
    }, []);
    
    return <div className='classList'>
        <h1>Список класса</h1>
        <div className="classListUl">
            {classList.map((student, i) => <Student student={student} key={i}/>)}
        </div>
        <Link to='/'>Назад</Link>
    </div>
}