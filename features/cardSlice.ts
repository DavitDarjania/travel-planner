import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
export interface cardState {
    data: [
        name: {
            common: string
        },
        capital: [
            string
        ],
        subregion: string,
        population: number,
        flag: {
            png: string
        },
    ]
}

const initialState: cardState = {
    data: [
        name: {
            common: string
        },
        capital: [
            string
        ],
        subregion: string,
        population: number,
        flag: {
            png: string
        },

    ]
}

export const cardSlice = createSlice({
    name: 'card_data',
    initialState,
    reducers: {
        add_data: (state, action: PayloadAction<{
            name: {
                common: string
            },
            capital: [
                string
            ],
            subregion: string,
            population: number,
            flag: {
                png: string
            },
        }>) => {
            // state.data.push(action.payload)
            // const {
            //     payload:
            //     { name: { common },
            //         capital: [],
            //         flag: {
            //             png: undefined
            //         },
            //         population:0

            //     }
            // } = action
        }
    }
})


export const { add_data } = cardSlice.actions

export default cardSlice.reducer