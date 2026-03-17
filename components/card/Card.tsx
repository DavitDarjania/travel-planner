import React from 'react'
import Button from '../button/Button'
// import CardImage from './card_image/Card_image'
import CardImage from './cardImage/CardImage'
import CardContent from './cardContent/CardContent'

const Card = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer " >
            {/* we gonna use map function here */}

            <CardImage imageUrl={''} imageAlt={''} />
            <CardContent countryName={''} countryCapital={''} countryPopulation={''} countryContinent={''} />
        </div>
    )
}

export default Card
