import { configureStore } from '@reduxjs/toolkit'
import cardReducer from '@/features/cardSlice'
import tripReducer from '@/features/tripsSlice'
// import { cardSlice } from '@/feat    ures/cardSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            data_update: cardReducer,
            plan_trip: tripReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
