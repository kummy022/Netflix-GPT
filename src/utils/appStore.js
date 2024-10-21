import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptSearchReducer from "./gptSearchSlice";
import configSliceReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user : userReducer,
    movies: moviesReducer,
    gptSearch: gptSearchReducer,
    config: configSliceReducer,
  },

})

export default appStore;