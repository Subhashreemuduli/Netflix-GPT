import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestOptions } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

export const useUpcomingMovies = () => {
  //fetch data from RapidAPI and update the store

  const dispatch = useDispatch();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const data = await fetch(
      "https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/upcoming-movies",
      requestOptions
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.movies));
  };
};
