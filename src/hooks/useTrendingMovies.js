import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestOption } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";

export const useTrendingMovies = () => {
  const [loading, setLoading] = useState(true);

  //fetch data from RapidAPI and update the store

  const dispatch = useDispatch();

  const trendingMovies = useSelector((store) => store.movies.trendingMovies);

  useEffect(() => {
    if (!trendingMovies) {
      getTrendingMovies();
    }
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/top-box-office",
      requestOption
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.movies));
    setLoading(false);
  };
  return loading;
};
