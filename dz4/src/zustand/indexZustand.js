import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCardStore = create(
    persist(
        (set) => ({
            cards: [],
            addCardData: (cards) => set({ cards })
        }),
        {name: 'cards-storage'}
    )
)