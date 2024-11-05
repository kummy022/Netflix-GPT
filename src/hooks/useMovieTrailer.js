import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerMovie } from "../utils/moviesSlice";



const useMovieTrailer = ({movieId})=>{
  const dispatch = useDispatch();
  //fetch movie Trailer here
  const getMovieTrailer = async()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, 
      API_OPTIONS);
    const json_data = await data.json();
   
    const filterData = json_data.results.filter(video => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json_data.results[0]  ;
    dispatch(addTrailerMovie(trailer));
  };

  useEffect(()=>{
    getMovieTrailer();
  },[] );

}

export default useMovieTrailer;