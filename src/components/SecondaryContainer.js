import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const upcomingMovies = movies?.nowPlayingMovies?.map(
    (movie) => movie.list[0]
  );
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20">
        <MovieList title={"Upcoming"} movies={upcomingMovies} />
        <MovieList title={"Trending Now"} movies={movies.trendingMovies} />
        <MovieList title={"Top Movies"} movies={movies.topMovies} />
        <MovieList title={"Horror"} movies={movies.horrorMovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
