


import CardImage from './cardImage/CardImage'
import CardContent from './cardContent/CardContent'

import { ICardContent } from '@/types/CardContent.interface'
import Link from 'next/link'
import Modal from '../modal/Modal'

// redux
import { RootState } from '@/lib/store'
import { add_data, modal_open } from '@/features/cardSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'

// react query
import useFetchCards from '@/hooks/useFetchCards'

import { createPortal } from 'react-dom'




const Card = () => {
    // react query
    const { data, isLoading, error } = useFetchCards()

    // redux store
    const openModal = useAppSelector((state: RootState) => state.data_update.isOpen)
    // const card_data = useAppSelector((state: RootState) => state.data_update.data)

    const dispatch = useAppDispatch()


    if (isLoading) { <h1>loading</h1> }
    if (error) { <h1>error</h1> }

    return (
        <>
            {/* we gonna use map function here */}
            {data?.data?.map((
                {
                    flag: { png },
                    name: { common, official },
                    subregion,
                    capital,
                    population,
                    currencies,
                    languages,
                    timezones,
                    area }: ICardContent) => (
                <div
                    onClick={() => {
                        // passing fetched data as action.payload for global store to 
                        // then have access it in the modal component
                        dispatch(
                            add_data({
                                flag: { png },
                                name: { common, official },
                                subregion,
                                capital,
                                population,
                                currencies,
                                languages,
                                timezones,
                                area
                            })),
                            dispatch(modal_open(true))
                    }}
                    key={common}
                    className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer '>
                    <CardImage imageUrl={png} imageAlt={common} subRegion={subregion} />
                    <CardContent
                        countryName={common}
                        countryCapital={capital.toString()}
                        countryPopulation={population / 10000}
                        countryContinent={subregion} />
                </div>
            ))

            }
            {openModal && createPortal(
                <Modal
                />, document.getElementById("headlessui-portal-root") as Element
            )}

        </>
    )

}


export default Card
