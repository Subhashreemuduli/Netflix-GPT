import { useSelector } from "react-redux";
import GptMovieList from "./GptMovieList";

const GptMovieSuggestion = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  if (!movieName) return null;

  return (
    <div className="md:mt-[16%] mt-[23%] py-2">
      <GptMovieList movies={movieResults} movieName={movieName} />
    </div>
  );
};

export default GptMovieSuggestion;
