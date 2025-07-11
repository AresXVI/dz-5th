import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useFilters = create((set) => ({
    type: 'all',
    setType: (type) => set({type})
}))

export const useStoreProject = create(
    persist(
        (set) => ({
            carts: [],
            favorites: [],
            priceFilter: [0, 500],
            addToCart: (product) => 
                set((state) => { 
                    const isInCart = state.carts.some((item) => item.id === product.id)
                    if (isInCart) {
                        return {
                            carts: state.carts.filter((item) => item.id !== product.id)
                        }
                    } else {
                        return {
                            carts: [...state.carts, {...product, completed: true}]
                        }
                    }
                }),
            addToFavorites: (product) => 
                set((state) => { 
                    const isInFavorites = state.favorites.some((item) => item.id === product.id)
                    if(isInFavorites) {
                        return {
                            favorites: state.favorites.filter((item) => item.id !== product.id)
                        }
                    } else {
                        return {
                            favorites: [...state.favorites, {...product, completed: true}]
                        }
                    }
                }),
            setPriceFilter: (min, max) =>
                set(() => ({
                    priceFilter: [min, max]
                }))
            
        }), {name: 'store'}
    )
)