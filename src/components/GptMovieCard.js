import { useState } from "react";
import MovieDetails from "./MovieDetails";

const GptMovieCard = ({ poster, text, starring }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {poster && (
        <div
          className={`relative mb-4 w-48  flex-shrink-0 cursor-pointer transition-all duration-0 transform ${
            isHovered
              ? "scale-110 h-80 md:w-56 w-48 rounded-xl shadow-xl"
              : "h-56"
          }`}
          onClick={() => setIsHovered(!isHovered)}
        >
          <img
            className="md:w-full w-52 h-56 object-cover rounded-t-lg"
            src={poster}
            alt={text}
          />

          {isHovered && (
            <div className="absolute top-44 w-full bg-gray-800  text-white rounded-b-lg p-4 flex flex-col items-center space-y-2 z-20">
              <MovieDetails text={text} starring={starring} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default GptMovieCard;
