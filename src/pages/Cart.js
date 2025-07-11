import React from 'react'
import { useStoreProject } from '../features/store';
import Product from '../components/Product';
import { List } from 'antd';


const Cart = () => {

    const { carts } = useStoreProject()

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Корзина</h2>
            <List dataSource={carts} grid={true} renderItem={(item) => (
                <List.Item key={item.id}> 
                    <Product product={item} />
                </List.Item>
            )} />
        </div>
    )
}

export default Cart;