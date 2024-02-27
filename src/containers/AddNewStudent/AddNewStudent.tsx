import { useState } from "react"
import { api } from "../../helpers/axiosApiClient";
import './AddNewStudent.css';
import { Link, useNavigate } from "react-router-dom";

export function AddNewStudent () {
    const [directory, setDirectory] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [parent, setParent] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const navigate = useNavigate();
    const saveHandler = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await api.put(`/classList/${directory}.json`, {name: name, phone: phone, parent: parent}, {headers: {
            'Content-Type': 'application/json',
        }});
        console.log(response);
        navigate('/admin');
    };

    return <form className="addNewStudent" onSubmit={(e) => saveHandler(e)}>
        <input type="text" placeholder="Директория БД" required onChange={(e) => setDirectory(e.target.value)}/>
        <input type="text" placeholder="ФИО РЕБЕНКА" required onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="ФИО РОДИТЕЛЯ" required onChange={(e) => setParent(e.target.value)}/>
        <input type="tel" placeholder="Телефон (8-***-***-**-**)" pattern="[8]{1}-[7]{1}[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}" required onChange={(e) => setPhone(e.target.value)}/>
        <button type="submit">Добавить</button>
        <Link to='/admin'>Назад</Link>
    </form>
}