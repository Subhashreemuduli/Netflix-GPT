import { NETFLIX_POSTER } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptsearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          src={NETFLIX_POSTER}
          alt="netflix poster"
          className="h-screen w-screen object-cover"
        />
      </div>

      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};
export default GptSearch;
