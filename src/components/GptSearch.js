import { NETFLIX_POSTER } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptsearchBar";

const GptSearch = () => {
  return (
    <div className="bg-gray-800">
      <img src={NETFLIX_POSTER} alt="netflix poster" className="absolute" />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};
export default GptSearch;
