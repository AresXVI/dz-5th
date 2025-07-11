import React, { useState } from 'react'
import { Card, Image } from 'antd';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import style from './components.module.css'
import { useStoreProject } from '../features/store';


const Product = ({product}) => {

    const { addToCart, addToFavorites, carts, favorites } = useStoreProject()

    const cartItem = carts.find((item) => item.id === product.id)
    const isCartCompleted  = cartItem?.completed

    const favoriteItem = favorites.find((i) => i.id === product.id)
    const isFavoriteCompleted  = favoriteItem?.completed

    return (
        <Card 
            className={style.card}
            title={product.title} 
            cover={<Image className={style.image} src={product.thumbnail} alt={product.title}/>}
        >
            <div className={style.content}>
                <p className={style.price}>Цена: {product.price}</p>
                <p className={style.rating}>Рейтинг: {product.rating}</p>
                <div 
                    style={{
                        fontSize: '20px', 
                        display: 'flex', 
                        justifyContent: 'space-between'
                    }}
                >
                    <ShoppingCartOutlined 
                        onClick={() => addToCart(product)} 
                        style={{cursor: 'pointer'}}
                        className={isCartCompleted ? style.clickedCart : ''}
                    />
                    <HeartOutlined 
                        onClick={() => addToFavorites(product)} 
                        style={{cursor: 'pointer'}}
                        className={isFavoriteCompleted ? style.clickedFavorite : ''}
                    />
                </div>
            </div>
        </Card>
    )
}

export default Product;