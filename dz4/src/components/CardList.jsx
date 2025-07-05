import React, { useEffect } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Card} from 'antd'
import { useCardStore } from '../zustand/indexZustand'

const URL = 'https://jsonplaceholder.typicode.com/users'

const fetchCards  = async () => {
    const response = await axios.get(URL);
    return response.data
}




const CardList = () => {
    
    const { addCardData, cards} = useCardStore()
    
    const {data, isLoading, error} = useQuery({
        queryKey: 'cards',
        queryFn: fetchCards
    })
    
    useEffect(() => {
        if(data) {
            addCardData(data)
        }
        }, [data])
        
    if(isLoading) return <p>Загрузка...</p>
    if(error) return <p>Ошибка: {error}</p>

    
    return (
        <>
            <h1>Карточки из Ant Design</h1>
            <ul>
                {cards.map((card) => (
                    <Card 
                        title={card.name} 
                        key={card.id} 
                        variant='borderless' 
                        style={{width: 230, background: "#0C0D0E"}}
                    >
                        <p>{card.username}</p>
                        <p>{card.email}</p>
                        <p>{card.phone}</p>
                        <p>{card.website}</p>
                    </Card>
                ))}
            </ul>
        </>
    )
}

export default CardList;