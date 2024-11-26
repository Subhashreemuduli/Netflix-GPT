import useHorrorMovies from "../hooks/useHorrorMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopMovies from "../hooks/useTopMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useUpcomingMovies();
  useTrendingMovies();
  useHorrorMovies();
  useTopMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer /> <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
