import { Button, Input } from 'antd';
import React, { useState } from 'react'
import { useAuthStore } from '../features/store';
import { useCheckoutStore } from '../features/store'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const { user } = useAuthStore();
    const { placingAnOrder } = useCheckoutStore()
    
    const username = user?.username
    const product = useLocation().state?.product
    const navigate = useNavigate()
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");


    const handleOrder = async () => {
        const checkoutData = { username, address, phone, product }
        const errMsg = placingAnOrder(checkoutData)
        setAddress(''); setPhone('');
        navigate('/')
        if(errMsg) {
            setError(errMsg)
            return;
        }
    }

    return (
        <div>
            <h2>Оформление заказа</h2>
            <Input 
                placeholder='Адрес' 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <Input 
                placeholder='Телефон' 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            {error && <p style={{color:  'red'}}>{error}</p>}
            <Button onClick={handleOrder}>Оформить заказ</Button>
        </div>
    )
}

export default Checkout;