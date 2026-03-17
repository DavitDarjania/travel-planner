import React from 'react'
import CardImage from '../card/cardImage/CardImage'
import CardContent from '../card/cardContent/CardContent'

const Modal = () => {
    return (
        <div className='w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all'>
            {/* <CardImage imageUrl={'https://flagcdn.com/w320/au.png'} imageAlt={''}
                // we might add extra props here
                imageDescription={true}
                imageName='australia'
                imageName2='australia is good'
            /> */}
            {/* modal image */}
            <CardImage
                imageUrl={'https://flagcdn.com/w320/au.png'}
                imageAlt={'It'}
                isModal={true}

            />
            <CardContent isModal={true} countryPopulation='asd' countryCapital='' countryName={''} countryContinent={''} />


            {/* <div className="relative h-48 overflow-hidden" data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEA3NjoxNg">
                <img src="https://flagcdn.com/w320/au.png"
                    alt="The flag of Australia has a dark blue field. It features the flag of the United Kingdom — the Union Jack — in the canton, beneath which is a large white seven-pointed star. A representation of the Southern Cross constellation, made up of one small five-pointed and four larger seven-pointed white stars, is situated on the fly side of the field."
                    className="w-full h-full object-cover"

                // image component class
                // className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"

                />
                <div className="absolute inset-0 bg-black opacity-20" ></div>
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-80 hover:bg-white transition-all duration-200" data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEA4NToxOA">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x h-5 w-5 text-gray-600" aria-hidden="true" data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEA4OToyMA">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                </button>
                <div className="absolute bottom-4 left-4 right-4" data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEA5MzoxOA">
                    <h2 className="text-2xl font-bold text-white mb-2" data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEA5NDoyMA">Australia</h2>
                    <p className="text-white text-opacity-90" data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEA5NzoyMA">Commonwealth of Australia</p>
                </div>
            </div> */}


        </div>
    )
}

export default Modal
