import React, { useState } from 'react'
import { Input, Button} from 'antd';
import { useAuthStore } from '../features/store';
import { useNavigate } from 'react-router-dom';



const Register = () => {

    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { register } = useAuthStore()

    const handleRegister = async () => {
        const userData = {username, email, password}
        const errMsg = register(userData)
        setUserName(''); setEmail(''); setPassword('');
        navigate('/login')
        if(errMsg) {
            setError(errMsg)
            return;
        }
    }

    return (
        <div>
            <h2>Регистрация</h2>
            <Input 
                placeholder='Логин' 
                name='username'
                value={username}
                onChange={(e) => setUserName(e.target.value)}
            />
            <Input
                placeholder='Email' 
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input.Password 
                placeholder='Пароль'
                name='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p style={{color: 'red'}}>{error}</p>}
            <Button onClick={handleRegister}>Зарегистрироваться</Button>
        </div>
    )
}

export default Register;