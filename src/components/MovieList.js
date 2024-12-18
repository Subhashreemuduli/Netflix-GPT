import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-16 ">
      <h1 className="py-3 font-bold md:text-2xl text-lg text-white">{title}</h1>
      <div className=" overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            <MovieCard
              poster={movie?.image}
              text={movie?.title}
              link={movie?.link}
              key={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
