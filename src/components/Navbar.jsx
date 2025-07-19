import React from 'react'
import { useAuthStore } from '../features/store'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import classes from './components.module.css'




const Navbar = () => {
    
    const { user, logout } = useAuthStore();
    const navigate = useNavigate()

    return (
        <nav>
            <h1>Магазин</h1>
            {user?.username ? (
                <div className={classes.navbar__container}>
                    <div className={classes.navbar__title}>
                        <span style={{fontSize: '20px'}}>Привет, {user?.username}</span>
                        <Button 
                            onClick={() => { logout(); navigate("/login") }}  
                            type="primary" 
                            danger 
                            ghost
                        >
                            Выйти
                        </Button>
                    </div>
                    <div className={classes.navbar__body}>
                        <Button
                            color="default" variant="outlined"
                            onClick={() => navigate("/")}
                        >
                            home
                        </Button>
                        <Button
                            color="cyan" variant="outlined"
                            onClick={() => navigate('/cart')}
                        >
                            cart
                        </Button>
                        <Button
                            color="pink" variant="outlined"
                            onClick={() => navigate('/favorites')}
                        >
                            favorite
                        </Button>
                        <Button
                            color="primary" variant="outlined"
                            onClick={() => navigate('/myOrders')}
                        >
                            my orders
                        </Button>
                    </div>
                </div>
            ) : (
                <>
                    <Button onClick={() => navigate("/login")}>Войти</Button>
                    <Button onClick={() => navigate("/register")}>Регистрация</Button>
                </>
            )}
        </nav>
    )
}

export default Navbar