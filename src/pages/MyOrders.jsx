import React from 'react'
import { useAuthStore, useCheckoutStore } from '../features/store'
import Product from '../components/Product';
import { List } from 'antd';
import classes from './Pages.module.css';

const MyOrders = () => {

    const { user } = useAuthStore();
    const { checkouts } = useCheckoutStore();
    
    const filterOrders = checkouts?.filter((order) => order.username === user?.username
    )
    console.log(filterOrders);
    
    
    return (
        <div className={classes.my_orders__container}>
            <h2 style={{textAlign: 'center'}}>Мои заказы</h2>
            <List dataSource={filterOrders} grid={true} renderItem={(order) => (
                <List.Item className={classes.order} key={order.product.id}> 
                <p>
                    <i>Адрес доставки: {order.address}</i><br/>
                    <i>Номер заказчика: {order.phone}</i>
                </p>
                    <Product product={order.product} />
                </List.Item>
            )} />
        </div>
    )
}

export default MyOrders