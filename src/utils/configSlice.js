import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({

  name: "config",
  initialState: {
    lang: "eng",
    currentTheme: "light",
  },
  reducers:{
    langChange: (state, action) =>{
      state.lang = action.payload;
    },
    themeChange: (state, action) => {
      state.currentTheme = (action.payload);
    },
  }
})


export const{ langChange, themeChange } = configSlice.actions;

export default configSlice.reducer;