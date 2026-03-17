import React from 'react'

// created interface for reusable button
interface IButton {
    backgroundColor: string,
    textColor: string,
    fontSize: string,
    hover: string,
    borderRadius: string,
    icon?: React.ReactNode
    content: string
}

const Button: React.FC<IButton> = ({
    backgroundColor,
    textColor,
    fontSize,
    hover,
    borderRadius,
    icon,
    content
}) => {
    return (
        <div>
            <a
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Plan a Trip
            </a>
        </div>
    )
}

export default Button
