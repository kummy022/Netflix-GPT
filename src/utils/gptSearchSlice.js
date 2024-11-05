import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice(
  {
    name: "gptSearch",
    initialState: {
      showGptSearch: false,
      movieResults: null,
      movieNames: null,
      clearGptMovies: true,
    }, 
    reducers: {
      toggleGptSearch: (state) =>{
        state.showGptSearch = !state.showGptSearch;
      },
      addGptMovieResults: (state, action) => {
        const {movieNames, movieResults} = action.payload;
        state.movieNames = movieNames;
        state.movieResults = movieResults;
      },
        addClearGptMovies: (state) => {
          state.showGptSearch = false;
          state.movieResults = null;
          state.movieNames = null;
          state.clearGptMovies = true;
        },
    },
  }
);


export const {toggleGptSearch, addGptMovieResults, addClearGptMovies } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;