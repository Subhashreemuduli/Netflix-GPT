import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHorrorMovies } from "../utils/moviesSlice";

const useHorrorMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovies();
  }, []);

  const myHeaders = new Headers();
  myHeaders.append(
    "x-apihub-key",
    "pQ-qe6rsvguMOhITf5RPPLWrB7O1pXdwtSOMAYudQfPfYYnrHD"
  );
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
  };
};

export default useHorrorMovies;
