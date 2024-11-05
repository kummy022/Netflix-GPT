import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((store) => store.topRatedMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    !topRatedMovies &&  getTopRatedMovies();

  },[] );

  const getTopRatedMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        API_OPTIONS
      );
      const json_data = await data.json();
      dispatch(addTopRatedMovies(json_data.results));
  }

};

export default useTopRatedMovies;