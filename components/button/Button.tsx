import React from 'react'
import clsx from 'clsx'
// import Link from 'next/link'

// created interface for reusable button
// interface IButton {
//     backgroundColor: string | number,
//     textColor: string,
//     fontSize: string,
//     hover: string,
//     borderRadius: string,
//     icon?: React.ReactNode
//     content: string
// }

type TButton = {
    fontSize?: string,
    variant:
    'primary'
    | 'secondary'
    | 'transparent'
    | 'favourites'
    | 'favourited'
    | 'add'
    | 'modal_favourite'
    | 'modal_favourited'
    | 'modal_add'
    | 'close'
    | 'save'
    | 'delete'
    | 'clear'
    | 'cancel'

    content: React.ReactNode | string,
    onClick?: (e: Event) => void
}

const Button: React.FC<TButton> = ({
    variant,
    content,
    onClick
}) => {

    //  `p-2 rounded-full transition-all duration-200 bg-white bg-opacity-80 text-gray-600 hover:bg-red-500 hover:text-white cursor-pointer`
    const buttonClass = clsx(
        'font-medium',
        {
            "bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer": variant == 'primary',
            "text-blue-600 px-8 py-4 rounded-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold text-lg": variant == 'transparent',
            "bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1": variant == 'secondary',
            "p-2 rounded-full transition-all duration-200 bg-white bg-opacity-80 text-gray-600 hover:bg-red-500 hover:text-white cursor-pointer": variant == 'favourites',
            // favourited style
            "p-2 rounded-full transition-all duration-200 bg-red-500 text-white cursor-pointer": variant == 'favourited',

            "p-2 rounded-full bg-white bg-opacity-80 text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer": variant == 'add',
            "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-red-500 hover:text-white flex flex-row items-center justify-center cursor-pointer": variant == 'modal_favourite',
            // modal favourited style
            "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 bg-red-500 text-white cursor-pointer": variant == 'modal_favourited',


            "flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 flex flex-row items-center justify-center cursor-pointer": variant == 'modal_add',
            "absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-80 hover:bg-white transition-all duration-200 cursor-pointer": variant == 'close',
            "w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 mb-4": variant == 'save',
            "p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors duration-200 cursor-pointer": variant == 'delete',
            "text-sm text-red-600 hover:text-red-800 cursor-pointer": variant == 'clear',
            "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200": variant == 'cancel'

        }
    )

    return (
        <button
            className={buttonClass}
            onClick={onClick}
        >
            {content}
        </button>
    )
}

export default Button
