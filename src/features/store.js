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

export const useAuthStore = create((set, get) => {
    const storedUSers = JSON.parse(localStorage.getItem("users") ||  "[]");

    return {
        user:  null,
        users: storedUSers,
        register: ( newUser ) => {
            const { users } = get();
            const userExists = users.some((user) => user.username === newUser.username || user.email === newUser.email)

            if(userExists) {
                alert("Пользователь c таким логином или email уже существует!")
            } else {
                const updateUsers = [...users, newUser];
                localStorage.setItem("users", JSON.stringify(updateUsers))
                set({ users: updateUsers })
                return null;
            }
        },
        login: (username, password) => {
            const { users } = get();
            const foundUser = users.find((user) => user.username === username && user.password === password)
            
            if (!foundUser) {
                alert('Неправильный логин или пароль!')
                return () => set({user: null})
            }

            set({ user: foundUser });
            return null;
        },
        logout: () => set({ user: null })
    }
})

export const useCheckoutStore = create((set, get) => {
    const storedCheckouts = JSON.parse(localStorage.getItem("checkouts") || "[]");

    return {
        checkouts: storedCheckouts,
        placingAnOrder:  (newOrder) => {
            const { checkouts } = get();
            const updateOrders = [...checkouts, newOrder];
            localStorage.setItem("checkouts", JSON.stringify(updateOrders));
            set({ checkouts: updateOrders });
        }
    }
})