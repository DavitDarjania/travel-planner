interface ICardContent {
    countryName: string
    countryCapital: string
    countryPopulation: string
    countryContinent: string
    isModal?: boolean
}

interface IModal extends ICardContent {
    details: string
}