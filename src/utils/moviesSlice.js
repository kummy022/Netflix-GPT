
import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerMovie: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
    
  },
  reducers: {
    addNowPlayingMovies: (state, action)=>{
      state.nowPlayingMovies = action.payload;
    },
    addTrailerMovie: (state, action)=>{
      state.trailerMovie = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

  }
  
});



export const { addNowPlayingMovies,
  addTrailerMovie,
  addPopularMovies, 
  addUpcomingMovies,
  addTopRatedMovies,
 } = moviesSlice.actions;
export default moviesSlice.reducer;