import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieName: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movieName = movieName;
    },
    clearMovies: () => {
      return null;
    },
  },
});
export const { toggleGptSearch, addGptMovieResult, clearMovies } =
  gptSlice.actions;
export default gptSlice.reducer;
