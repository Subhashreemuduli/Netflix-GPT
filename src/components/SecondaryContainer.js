import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const upcomingMovies = movies?.nowPlayingMovies?.map(
    (movie) => movie.list[0]
  );

  return (
    <div className="bg-black">
      <div className="md:-mt-56 mt-0 relative z-20">
        {upcomingMovies && (
          <MovieList title={"Upcoming"} movies={upcomingMovies} />
        )}
        {movies.trendingMovies && (
          <MovieList title={"Trending Now"} movies={movies.trendingMovies} />
        )}
        {movies.topMovies && (
          <MovieList title={"Top Movies"} movies={movies.topMovies} />
        )}
        {movies.horrorMovies && (
          <MovieList title={"Horror"} movies={movies.horrorMovies} />
        )}
      </div>
    </div>
  );
};
export default SecondaryContainer;
