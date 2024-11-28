import { useSelector } from "react-redux";
import GptMovieList from "./GptMovieList";

const GptMovieSuggestion = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  if (!movieName) return null;

  return (
    <div className="absolute mt-[15%]">
      <GptMovieList movies={movieResults} movieName={movieName} />
    </div>
  );
};

export default GptMovieSuggestion;
