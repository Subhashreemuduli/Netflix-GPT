import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestOption } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";

export const useTrendingMovies = () => {
  //fetch data from RapidAPI and update the store

  const dispatch = useDispatch();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/top-box-office",
      requestOption
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.movies));
  };
};
