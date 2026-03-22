// "use client"
import React from 'react'
// import Button from '../button/page'
// import HeaderLogo from './header_logo/page'

import Button from '../button/Button'
import HeaderLogo from './headerLogo/HeaderLogo'
// import Card from '../card/page'
import Card from '../card/Card'
// import { usePathname } from 'next/navigation'
import Link from 'next/link'
interface IHeader {
    isMain: boolean
}

const Header: React.FC<IHeader> = ({ isMain = false }) => {
    // const path = usePathname()

    return (
        // there is two types of headers, landing page header and sticky header which is available for main page
        // we can conditionally have classes for each header

        // sticky top-0 z-40
        <header className={`${isMain ? 'bg-white shadow-sm ticky top-0 z-40' : 'bg-white shadow-sm'}`}>
            <div
                className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'
            >
                <div className="flex items-center justify-between">
                    <HeaderLogo />

                    {/* <Link href={`${isMain ? '/plan_page' : ''}`}> */}
                    <Button
                        variant='primary'
                        content='Plan a trip'
                        onClick={() => {
                            console.log('open sidebar')
                        }}
                    />
                    {/* </Link> */}
                </div>
            </div>
        </header>

    )
}

export default Header
