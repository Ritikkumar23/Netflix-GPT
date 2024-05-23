import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className='md:w-52 w-20 pr-2 md:pr-4  '>
            <img className='' alt='Movie Card'
                src={IMG_CDN_URL + posterPath}
            />
        </div>
    )
}

export default MovieCard
