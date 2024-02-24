import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './Login.css';

export function Login () {
    const navigate = useNavigate();
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        switch (login) {
            case 'admin':
                switch (password) {
                    case 'password': 
                        navigate('/admin');
                        break;
                    default:
                        navigate('/');
                        alert('Не верный логин или пароль!');
                        break;
                }
                break;
            default:
                navigate('/');
                alert('Не верный логин или пароль!');
                break;
        }
    };

    return <form className="login" onSubmit={(e) => loginHandler(e)}>
        <input type="text" placeholder="Name" onChange={(e) => setLogin(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
        <button type="submit">Login</button>
    </form>
}