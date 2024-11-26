import { NETFLIX_POSTER } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptsearchBar";

const GptSearch = () => {
  return (
    <div className="absolute -z-10">
      <img src={NETFLIX_POSTER} alt="netflix poster" />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};
export default GptSearch;
