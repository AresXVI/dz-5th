import React, { useState } from 'react'
import { Input, List, Spin } from 'antd'
import { useQuery} from '@tanstack/react-query';
import { SearchProducts } from '../api/requests';
import Product from '../components/Product';


const Search = () => {
    
    const [query, setQuery] = useState('')
    const {data, isLoading, error} = useQuery({
        queryKey: ['search', query],
        queryFn: () => SearchProducts(query),
        enabled: !!query
    })

    return (
        <div >
            <Input.Search 
                placeholder='Поиск товара...'
                onSearch={(value) => setQuery(value)}
                enterButton={true}
            />
            <List 
                style={{marginTop: 15}} 
                dataSource={data} 
                grid={true} 
            renderItem={(item) => (
                <List.Item key={item.id}>
                    <Product product={item} />
                </List.Item>
            )}/>
        </div>
    )
}

export default Search