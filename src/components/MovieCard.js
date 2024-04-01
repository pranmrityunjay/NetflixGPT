import React from 'react'

const MovieCard = ({poster_path}) => {
  return (
    <div className="w-28 md:w-48 pr-4">
    <img className='rounded-sm' src={"https://image.tmdb.org/t/p/w200/"+poster_path}></img>
    </div>
  )
}

export default MovieCard