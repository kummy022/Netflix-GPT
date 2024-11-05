import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () =>{
  const upcomingMovies = useSelector((store) => store.upcomingMovies);
  const dispatch = useDispatch();
  
  const getUpcomingMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', 
      API_OPTIONS );
    const json_data = await data.json();
 
    dispatch(addUpcomingMovies(json_data.results));
  }

  useEffect(()=>{
    !upcomingMovies && getUpcomingMovies();

  },[]);

};

export default useUpcomingMovies;