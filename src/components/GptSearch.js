import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchSuggestions from './GptSearchSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
    return (
        <div>
            <div className=' fixed -z-10'>
                <img className='h-screen md:h-screen  object-cover md:w-screen ' src={BG_URL}
                    alt="logo" />
            </div>
            <div className=''>
                <GptSearchBar />
                <GptSearchSuggestions />
            </div>
        </div>
    )
}

export default GptSearch
