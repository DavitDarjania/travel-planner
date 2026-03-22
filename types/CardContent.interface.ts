export interface ICardContent {
    

    name: {
        common: string,
        official: string
    },
    capital: [
        string
    ],
    subregion: string,
    population: number,
    flag: {
        png: string
    },
    currencies: [
        {
            code: string,
            name: string,
            symbol: Symbol
        }
    ],
    languages: [
        {
            name: string
        }
    ],
    area: number,
    timezones: [
        string
    ]
}



interface IModal extends ICardContent {
    details: string
}


