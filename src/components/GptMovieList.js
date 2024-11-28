import GptMovieCard from "./GptMovieCard";

const GptMovieList = ({ movies, movieName }) => {
  const searchMovies = movies?.flatMap((movie) => movie?.d);
  // const finalResult = searchMovies?.map((data) => data?.d);
  console.log(searchMovies, "...........................");
  return (
    <div>
      <div className="px-16 relative">
        <h1 className="text-white font-bold text-2xl text-center absolute w-11/12 top-5">
          Search Result : {movieName?.join(",")}
        </h1>
        <div className="flex space-x-4 flex-wrap justify-center bg-gray-800 bg-opacity-90 pt-20 rounded-lg">
          {searchMovies?.map((movie) => (
            <GptMovieCard
              poster={movie?.i?.imageUrl}
              text={movie?.l}
              key={movie.l}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default GptMovieList;
