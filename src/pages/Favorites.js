import { List } from 'antd';
import React from 'react'
import Product from '../components/Product';
import { useStoreProject } from '../features/store';


const Favorites = () => {

    const { favorites } = useStoreProject()

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Избранное</h2>
            <List dataSource={favorites } grid={true} renderItem={(item) => (
                <List.Item key={item.id}> 
                    <Product product={item} />
                </List.Item>
            )} />
        </div>    )
}

export default Favorites;