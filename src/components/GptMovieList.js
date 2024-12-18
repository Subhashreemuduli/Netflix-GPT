import GptMovieCard from "./GptMovieCard";

const GptMovieList = ({ movies, movieName }) => {
  const searchMovies = movies?.flatMap((movie) => movie?.d);

  return (
    <div>
      <div className="px-10 relative ">
        <h1 className="text-white font-bold text-center absolute md:w-11/12 md:top-5 md:py-0 py-2 hidden md:block sm:text-2xl">
          Search Result : {movieName?.join(",")}
        </h1>
        <div className="flex space-x-4 flex-wrap justify-center bg-gray-700 bg-opacity-90 md:pt-20 rounded-lg py-8">
          {searchMovies?.map((movie, index) => (
            <GptMovieCard
              poster={movie?.i?.imageUrl}
              text={movie?.l}
              starring={movie?.s}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default GptMovieList;
