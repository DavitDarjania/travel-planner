import { configureStore } from '@reduxjs/toolkit'
import cardReducer from '@/features/cardSlice'
// import { cardSlice } from '@/features/cardSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            data_update: cardReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
