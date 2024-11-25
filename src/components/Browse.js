import useHorrorMovies from "../hooks/useHorrorMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopMovies from "../hooks/useTopMovies";
const Browse = () => {
  useUpcomingMovies();
  useTrendingMovies();
  useHorrorMovies();
  useTopMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
