import React from 'react'
import Button from '../button/Button'

interface ITestModal {
    onClose: () => void
}

const TestModal = ({ onClose }: ITestModal) => {
    return (
        <div
            className="relative z-50" onClick={onClose}>
            <div className="fixed inset-0 bg-black opacity-25"></div>
            <div className="fixed inset-0 overflow-y-auto" data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEA2Mzo4">
                <div
                    className="flex min-h-full items-center justify-center p-4 text-center"
                >
                    <div
                        className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all"

                    >
                        <div
                            className="relative h-48 overflow-hidden"
                        >
                            <img
                                src="https://flagcdn.com/w320/ru.png"
                                alt="The flag of Russia is composed of three equal horizontal bands of white, blue and red."
                            />
                            <div
                                className="absolute inset-0 black bg-opacity-20"
                            ></div>
                            <Button
                                variant={'modal_add'}
                                content={
                                    <>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-x h-5 w-5 text-gray-600"
                                            aria-hidden="true"
                                            data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEA4OToyMA"
                                        >
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                        </svg>
                                    </>
                                }


                            />
                            <Button
                                onClick={onClose}
                                variant='close'
                                content={
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-5 w-5 text-gray-600" aria-hidden="true" data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEA4OToyMA"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                                    </>
                                }
                            />
                            {/* <button
                                            className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-80 hover:bg-white transition-all duration-200"
                                            data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEA4NToxOA"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-x h-5 w-5 text-gray-600"
                                                aria-hidden="true"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEA4OToyMA"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </button> */}
                            <div
                                className="absolute bottom-4 left-4 right-4"
                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEA5MzoxOA"
                            >
                                <h2
                                    className="text-2xl font-bold text-white mb-2"
                                    data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEA5NDoyMA"
                                >
                                    Russia
                                </h2>
                                <p
                                    className="text-white text-opacity-90"
                                    data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEA5NzoyMA"
                                >
                                    Russian Federation
                                </p>
                            </div>
                        </div>
                        <div className="p-6" data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxMDQ6MTY">
                            <div
                                className="flex space-x-3 mb-6"
                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxMDY6MTg"
                            >
                                <button
                                    className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-red-500 hover:text-white"
                                    data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxMDc6MjA"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-heart h-4 w-4"
                                        aria-hidden="true"
                                        data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxMTU6MjI"
                                    >
                                        <path
                                            d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                                    <span data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxMTY6MjI"
                                    >Add to Favorites</span>
                                </button>

                            </div>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxMjk6MTg"
                            >
                                <div
                                    className="space-y-4"
                                    data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxMzA6MjA"
                                >
                                    <div
                                        className="flex items-start space-x-3"
                                        data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxMzE6MjI"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-map-pin h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0"
                                            aria-hidden="true"
                                            data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxMzI6MjQ"
                                        >
                                            <path
                                                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                                            ></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <div data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxMzM6MjQ">
                                            <h3
                                                className="font-semibold text-gray-900"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxMzQ6MjY"
                                                data-yw-t="true"
                                            >
                                                Region
                                            </h3>
                                            <p
                                                className="text-gray-600"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxMzU6MjY"
                                            >
                                                Europe
                                            </p>
                                            <p
                                                className="text-sm text-gray-500"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxMzc6Mjg"
                                            >
                                                Eastern Europe
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-start space-x-3"
                                        data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNDM6MjQ"
                                    >
                                        <div
                                            className="h-5 w-5 rounded-full bg-blue-500 mt-0.5 flex-shrink-0"
                                            data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNDQ6MjY"
                                        ></div>
                                        <div data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNDU6MjY">
                                            <h3
                                                className="font-semibold text-gray-900"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNDY6Mjg"
                                                data-yw-t="true"
                                            >
                                                Capital
                                            </h3>
                                            <p
                                                className="text-gray-600"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNDc6Mjg"
                                            >
                                                Moscow
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-start space-x-3"
                                        data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNTI6MjI"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-users h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                                            aria-hidden="true"
                                            data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNTM6MjQ"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                        </svg>
                                        <div data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNTQ6MjQ">
                                            <h3
                                                className="font-semibold text-gray-900"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNTU6MjY"
                                                data-yw-t="true"
                                            >
                                                Population
                                            </h3>
                                            <p
                                                className="text-gray-600"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNTY6MjY"
                                            >
                                                146,794,043
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-start space-x-3"
                                        data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNjA6MjI"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-map-pin h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0"
                                            aria-hidden="true"
                                            data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNjE6MjQ"
                                        >
                                            <path
                                                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                                            ></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <div data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNjI6MjQ">
                                            <h3
                                                className="font-semibold text-gray-900"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNjM6MjY"
                                                data-yw-t="true"
                                            >
                                                Area
                                            </h3>
                                            <p
                                                className="text-gray-600"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNjQ6MjY"
                                            >
                                                17,098,242 km²
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="space-y-4"
                                    data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNjk6MjA"
                                >
                                    <div
                                        className="flex items-start space-x-3"
                                        data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNzA6MjI"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-dollar-sign h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0"
                                            aria-hidden="true"
                                            data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNzE6MjQ"
                                        >
                                            <line x1="12" x2="12" y1="2" y2="22"></line>
                                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                        </svg>
                                        <div data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNzI6MjQ">
                                            <h3
                                                className="font-semibold text-gray-900"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNzM6MjY"
                                                data-yw-t="true"
                                            >
                                                Currency
                                            </h3>
                                            <p
                                                className="text-gray-600"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNzQ6MjY"
                                            >
                                                Russian ruble (₽)
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-start space-x-3"
                                        data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNzg6MjI"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-globe h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0"
                                            aria-hidden="true"
                                            data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxNzk6MjQ"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                            <path d="M2 12h20"></path>
                                        </svg>
                                        <div data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxODA6MjQ">
                                            <h3
                                                className="font-semibold text-gray-900"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxODE6MjY"
                                                data-yw-t="true"
                                            >
                                                Languages
                                            </h3>
                                            <p
                                                className="text-gray-600"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxODI6MjY"
                                            >
                                                Russian
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-start space-x-3"
                                        data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxODY6MjI"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-clock h-5 w-5 text-red-500 mt-0.5 flex-shrink-0"
                                            aria-hidden="true"
                                            data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxODc6MjQ"
                                        >
                                            <path d="M12 6v6l4 2"></path>
                                            <circle cx="12" cy="12" r="10"></circle>
                                        </svg>
                                        <div data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxODg6MjQ">
                                            <h3
                                                className="font-semibold text-gray-900"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxODk6MjY"
                                                data-yw-t="true"
                                            >
                                                Timezones
                                            </h3>
                                            <p
                                                className="text-gray-600"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxOTA6MjY"
                                            >
                                                UTC+02:00, UTC+03:00, UTC+04:00, UTC+05:00, UTC+06:00, UTC+07:00,
                                                UTC+08:00, UTC+09:00, UTC+10:00, UTC+11:00, UTC+12:00
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-start space-x-3"
                                        data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxOTQ6MjI"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-globe h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0"
                                            aria-hidden="true"
                                            data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxOTU6MjQ"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                            <path d="M2 12h20"></path>
                                        </svg>
                                        <div data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxOTY6MjQ">
                                            <h3
                                                className="font-semibold text-gray-900"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxOTc6MjY"
                                                data-yw-t="true"
                                            >
                                                Continents
                                            </h3>
                                            <p
                                                className="text-gray-600"
                                                data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeU1vZGFsLnRzeEAxOTg6MjY"
                                            >
                                                Europe, Asia
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestModal
