"use client"
import React, { useState } from 'react'
import Button from '../button/Button'
import { createPortal } from 'react-dom'


import CardImage from './cardImage/CardImage'
import CardContent from './cardContent/CardContent'
import useFetchCards from '@/hooks/useFetchCards'
import { ICardContent } from '@/types/CardContent.interface'
import Modal from '../modal/Modal'
import TestModal from '../modal/TestModal'
// import StoreProvider from '@/app/StoreProvider'
// import { QueryClientProvider } from '@tanstack/react-query'
// import { client } from '@/client/client'
import { RootState } from '@/lib/store'
// import { useDispatch, useSelector } from 'react-redux'
import { add_data } from '@/features/cardSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'

const Card = () => {

    const { data, isLoading, error } = useFetchCards()

    console.log(data)
    const [openModal, setOpenModal] = useState(false)

    const store_data = useAppSelector((state: RootState) => state.data_update.data)
    const dispatch = useAppDispatch()

    console.log(store_data, 'store data')
    console.log("modal is ", openModal ? 'open' : 'closed')

    if (isLoading) { <h1>loading</h1> }
    if (error) { <h1>error</h1> }

    return (
        <>
            {/* we gonna use map function here */}
            {data?.data?.map(({ flag: { png }, name: { common }, subregion, capital, population }) => <>
                <div
                    onClick={() => {
                        setOpenModal(!openModal),
                            // console.log(common)
                            dispatch(add_data({ data }))
                    }}
                    key={population}
                    className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer '>
                    <CardImage imageUrl={png} imageAlt={common} />
                    <CardContent countryName={common} countryCapital={capital.toString()}
                        countryPopulation={population / 10000} countryContinent={subregion} />
                </div>
            </>)}

            {openModal && createPortal(
                <TestModal onClose={() => setOpenModal(false)} />, document.body
            )}

        </>
    )
}

export default Card
