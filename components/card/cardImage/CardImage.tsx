import React from 'react'
import Button from '@/components/button/Button'

interface ICardImage {
  imageUrl: string,
  imageAlt: string
}

const CardImage: React.FC<ICardImage> = ({ imageUrl, imageAlt }) => {
  return (
    <div className="relative h-48 overflow-hidden" >
      <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" ></div>
      <div className="absolute top-3 right-3 flex space-x-2" >
        <Button backgroundColor={''} textColor={''} fontSize={''} hover={''} borderRadius={''} content={''} />
        <Button backgroundColor={''} textColor={''} fontSize={''} hover={''} borderRadius={''} content={''} />
        {/* defined button component for these buttons */}

        {/* <button className="p-2 rounded-full transition-all duration-200 bg-white bg-opacity-80 text-gray-600 hover:bg-red-500 hover:text-white" data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeUNhcmQudHN4QDE3ODoxMA">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart h-4 w-4" aria-hidden="true" data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeUNhcmQudHN4QDE4NjoxMg">
                            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                        </svg>
                    </button>
                    <button className="p-2 rounded-full bg-white bg-opacity-80 text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-200" data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeUNhcmQudHN4QDE4OToxMg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus h-4 w-4" aria-hidden="true" data-yw="c3JjL2NvbXBvbmVudHMvQ291bnRyeUNhcmQudHN4QDE5MzoxNA">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                    </button> */}
      </div>
    </div>
  )
}

export default CardImage
