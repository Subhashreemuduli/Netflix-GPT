import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-16 ">
      <h1 className="py-2 font-bold text-2xl text-white">{title}</h1>
      <div className=" overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            <MovieCard
              poster={movie?.image}
              text={movie?.title}
              key={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
