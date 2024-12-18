import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestOptions } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

export const useUpcomingMovies = () => {
  const [loading, setLoading] = useState(true);

  //fetch data from RapidAPI and update the store

  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  useEffect(() => {
    if (!upcomingMovies) {
      getMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovies = async () => {
    const data = await fetch(
      "https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/upcoming-movies",
      requestOptions
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.movies));
    setLoading(false);
  };
  return loading;
};
