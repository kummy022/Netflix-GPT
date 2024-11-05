import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = ()=>{
  const popularMovies = useSelector((store) => store.popularMovies);
  const dispatch = useDispatch();

  const getPopularMovies = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", 
      API_OPTIONS);
    const json_data = await data.json();
    
    dispatch(addPopularMovies(json_data.results));


  }

  useEffect(() => {
  !popularMovies && getPopularMovies();
  }, [])
};


export default usePopularMovies;
