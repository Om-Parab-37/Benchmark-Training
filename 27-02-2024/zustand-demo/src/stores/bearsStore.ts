import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IBearsState {
    bears: number
    increasePopulation: () => void
    decreamentPopulation: () => void
    updateBears: (newBears: number) => void


}

export const useBearsStore = create<IBearsState>()(persist((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    decreamentPopulation: () => set((state) => ({ bears: state.bears - 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears }),
}), { name: "bears" }))