import { ICardContent } from "@/types/CardContent.interface";
import { compose, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";
// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

interface Ifavourite {
    name: string
}

interface IAppState {
    data: ICardContent | {}
    isOpen: boolean
    favourites: Ifavourite[]
}

const initialState: IAppState = {
    data: {},
    isOpen: false,
    favourites: localStorage.getItem("favourites")
        ? JSON.parse(localStorage.getItem("favourites")!)
        : [],
}

export const cardSlice = createSlice({
    name: 'card_data',
    initialState,
    reducers: {
        add_data: (state, action) => {
            state.data = action.payload
        },
        modal_open: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
        },
        add_favourites: (state, action) => {
            state.favourites.push(action.payload)
            localStorage.setItem("favourites", JSON.stringify(state.favourites))
        },
        remove_favourites: (state, action) => {
            const placeName = action.payload
            const favourite = state.favourites.find((item) => item === placeName)
            state.favourites = state.favourites.filter((item) => item !== favourite)
            localStorage.setItem("favourites", JSON.stringify(state.favourites))
        }
    },

})


export const { add_data, modal_open, add_favourites, remove_favourites } = cardSlice.actions

export default cardSlice.reducer