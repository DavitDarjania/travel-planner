export interface ICardContent {
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

    // isModal?: boolean

}



interface IModal extends ICardContent {
    details: string
}


