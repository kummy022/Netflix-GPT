
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';


const Browse = () => {
  const showGpt = useSelector((store)=> store.gptSearch.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();


  return (
    <div>
      <Header/>
      { showGpt ? (
        <GptSearch/>
      ):(
        <>
         <MainContainer/>
         <SecondaryContainer/>
        </>
      )
    } 
    </div>
  )
};

export default Browse;