import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchSuggestions from './GptSearchSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
    return (
        <div>
            <div className='absolute -z-10'>
                <img src={BG_URL}
                    alt="logo" />
            </div>
            <GptSearchBar />
            <GptSearchSuggestions />
        </div>
    )
}

export default GptSearch