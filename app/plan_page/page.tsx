import { client } from '@/client/client'
import Providers from '@/client/provider'
import Card from '@/components/card/Card'
import Header from '@/components/header/Header'
import TestModal from '@/components/modal/TestModal'
// import React from 'react'
const PlanPage = () => {

  return (

    <>
      <Header isMain={false} />
      {/* <TestModal /> */}
      <main
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all duration-300 '
      >
        <div className='grid gap-6 transition-all duration-300 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <Providers>
            <Card />
          </Providers>
        </div>

      </main>
    </>

  )
}

export default PlanPage
