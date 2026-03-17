import React from 'react'
import CardTag from './cardTag/CardTag'


interface ICardContent {
    countryName: string
    countryCapital: string
    countryPopulation: string,
    countryContinent: string
}

const CardContent: React.FC<ICardContent> = ({ countryName, countryCapital, countryPopulation, countryContinent }) => {
    return (
        <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1" >Argentina</h3>
            <div className="space-y-2 text-sm text-gray-600" >
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin h-4 w-4 flex-shrink-0" aria-hidden="true" >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="line-clamp-1" >{countryName}</span>
                </div>
                <div className="flex items-center space-x-2" >
                    <div className="h-4 w-4 flex-shrink-0 rounded-full bg-gray-300"></div>
                    <span className="line-clamp-1">Capital: {countryCapital}</span>
                </div>
                <div className="flex items-center space-x-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-4 w-4 flex-shrink-0" aria-hidden="true" >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                    <span >{countryPopulation} people</span>
                </div>
            </div>
            {/* <CardTag /> */}
            <div className="mt-3" >
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full" >
                    {countryContinent}
                </span>
            </div>
        </div>
    )
}

export default CardContent
