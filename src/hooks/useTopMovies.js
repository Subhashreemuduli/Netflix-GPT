import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopMovies } from "../utils/moviesSlice";
import { API_KEY } from "../utils/constants";

const useTopMovies = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const topMovies = useSelector((store) => store.movies.topMovies);

  useEffect(() => {
    if (!topMovies) {
      getTopMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const myHeaders = new Headers();
  myHeaders.append("x-apihub-key", API_KEY);
  myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
  myHeaders.append("x-apihub-endpoint", "611cdfda-546d-4cc9-91ab-bfdac3194613");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const getTopMovies = async () => {
    const data = await fetch(
      "https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/most-popular-movies",
      requestOptions
    );
    const json = await data.json();
    dispatch(addTopMovies(json.movies));
    setLoading(false);
  };
  return loading;
};

export default useTopMovies;
