import React from 'react'
// import Button from '../button/page'
// import HeaderLogo from './header_logo/page'
import Button from '../button/Button'
import HeaderLogo from './headerLogo/HeaderLogo'
// import Card from '../card/page'
import Card from '../card/Card'
const Header = () => {
    return (
        <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <HeaderLogo />
                    <Button
                        backgroundColor={''}
                        textColor={''}
                        fontSize={''}
                        hover={''}
                        borderRadius={''}
                        content={''} />
                    <Card />
                </div>
            </div>
        </header>

    )
}

export default Header
