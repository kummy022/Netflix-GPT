import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies)
  return (
    <div className='-mt-48 pl-10 bg-current'>
      <div className='relative z-20'>
      <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies} />
      <MovieList title = {"Popular"} movies = {movies.popularMovies} />
      <MovieList title = {"Upcoming Moives"} movies = {movies.upcomingMovies} />
      <MovieList title = {"Top Rated Movies"} movies = {movies.topRatedMovies} />
      </div>
    </div>
  )
};

export default SecondaryContainer