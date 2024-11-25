import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopMovies } from "../utils/moviesSlice";

const useTopMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopMovies();
  }, []);

  const myHeaders = new Headers();
  myHeaders.append(
    "x-apihub-key",
    "pQ-qe6rsvguMOhITf5RPPLWrB7O1pXdwtSOMAYudQfPfYYnrHD"
  );
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
  };
};

export default useTopMovies;