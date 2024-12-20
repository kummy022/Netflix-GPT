import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () =>{
  const nowPlayingMovies = useSelector((store) => store.nowPlayingMovies)
  const dispatch = useDispatch();

  const getNowPlayingMovies = async() => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1", 
      API_OPTIONS
    );
    const json_data = await data.json();
    dispatch(addNowPlayingMovies(json_data.results));
    
   
  
  };

  useEffect(()=> {

    !nowPlayingMovies && getNowPlayingMovies();

  },[]);

};

export default useNowPlayingMovies;