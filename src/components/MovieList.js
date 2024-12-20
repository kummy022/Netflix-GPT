import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
 
  return (
    <div className='px-4'>
        <h1 className='text-lg font-bold text-white py-2 '>{title}</h1>
      <div className="flex overflow-scroll">
      
        <div className='flex'>
            { movies && movies.length > 0 ? (
            movies.map((movie) => (
                  <MovieCard key={movie.id} posterPath = {movie.poster_path}/>))
            ): (
              <p>No movies available</p>
            )}
        </div>
      </div>
    </div>
          
 
  )
}

export default MovieList