import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies } from "../utils/moviesSlice";
import { API_KEY } from "../utils/constants";

const useHorrorMovies = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const horrorMovies = useSelector((store) => store.movies.horrorMovies);

  useEffect(() => {
    if (!horrorMovies) {
      getMovies();
    }
  }, []);

  const myHeaders = new Headers();
  myHeaders.append("x-apihub-key", API_KEY);
  myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
  myHeaders.append("x-apihub-endpoint", "e630a9b2-ceba-4267-a7fb-72000ea46239");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const getMovies = async () => {
    const data = await fetch(
      "https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/new-horror",
      requestOptions
    );
    const json = await data.json();
    dispatch(addHorrorMovies(json.list));
    setLoading(false);
  };
  return loading;
};

export default useHorrorMovies;
