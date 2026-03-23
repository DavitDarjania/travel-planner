import React, { useState } from 'react'
import Button from '../button/Button'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { clear_all, current_trip_name, save_current_trip_status, save_planned_trip } from '@/features/tripsSlice'

const sideBarForm = () => {
    const [tripName, setTripName] = useState("")
    const dispatch = useAppDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { value } = e.target
        setTripName(value)
    }
    const { current_trip_name_set } = useAppSelector((state) => state.plan_trip)
    const { current_trips } = useAppSelector((state) => state.plan_trip)





    return (
        <div className="space-y-3">
            <input type="text"
                placeholder="Enter trip name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleChange}
            />
            <div className="flex space-x-2">
                <button
                    // onSubmit={handleSubmit}
                    // disabled={current_trips.length !== 0}
                    disabled={tripName === ''}
                    onClick={() => {
                        const date = new Date().toISOString().slice(0, 10).replaceAll("-", "/")
                        dispatch(save_planned_trip({ plan_name: tripName, creation_date: date, current_trip_data: current_trips }))
                        dispatch(clear_all())
                    }}

                    className={` ${tripName === '' ? 'bg-gray-300 cursor-not-allowed flex-1 px-4 py-2 rounded-lg text-white' : 'flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200'} `}>Save</button>
                <Button
                    variant='cancel'
                    content={
                        <>
                            Cancel
                        </>
                    }
                    onClick={() => {
                        dispatch(save_current_trip_status(false))
                    }}
                >
                </Button>
            </div>
        </div >
    )
}

export default sideBarForm
