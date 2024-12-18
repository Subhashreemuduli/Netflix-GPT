import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import { useRef, useState } from "react";
import { addGptMovieResult } from "../utils/gptSlice";
import { API_KEY, OPENAI_KEY } from "../utils/constants";
import OpenAI from "openai";
import ShimmerCard from "./ShimmerCard";

const GptSearchBar = () => {
  const [loading, setLoading] = useState(false);

  const langKey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMoviesFromApi = async (movie) => {
    const myHeaders = new Headers();
    myHeaders.append("x-apihub-key", API_KEY);
    myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
    myHeaders.append(
      "x-apihub-endpoint",
      "06344c37-2a53-4936-be17-34568bdc31ab"
    );
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      query: movie,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const data = await fetch(
      "https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/search-movies-by-query",
      requestOptions
    );

    const json = await data.json();
    return json;
  };

  const handleGptSearchClick = async () => {
    //make an api call to GPT AI and get movie results
    const client = new OpenAI({
      apiKey: OPENAI_KEY,
      dangerouslyAllowBrowser: true,
    });

    setLoading(true);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ", only give me names of 2 movies, comma separated like the example result given ahead.Example Result: Happy New Year, Welcome Back, Phir Hera Pheri, Bahubali, Pushpa";
    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");

    const result = gptMovies.map((movie) => searchMoviesFromApi(movie));
    const movies = await Promise.all(result);
    dispatch(addGptMovieResult({ movieName: gptMovies, movieResults: movies }));
    setLoading(false);
  };

  return (
    <div className="pt-[30%] md:pt-8 flex justify-center ">
      <form
        className="bg-gray-900 absolute mt-[10%] grid grid-cols-12  z-10 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey]?.placeHolderText}
          className="py-2 px-4 m-2 text-black md:text-lg text-md md:col-span-10 col-span-9 rounded-lg "
        />
        <button
          className=" md:m-2 md:px-4 p-2 m-2  bg-red-500 text-white md:text-lg rounded-lg md:col-span-2 col-span-3 font-semibold text-md"
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search}
        </button>
      </form>
      {loading && <ShimmerCard />}
    </div>
  );
};
export default GptSearchBar;
