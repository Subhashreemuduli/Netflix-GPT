import useHorrorMovies from "../hooks/useHorrorMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopMovies from "../hooks/useTopMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Shimmer from "./Shimmer";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const loadingUpcoming = useUpcomingMovies();
  const loadingTrending = useTrendingMovies();
  const loadingHorror = useHorrorMovies();
  const loadingTop = useTopMovies();

  const isLoading =
    loadingUpcoming || loadingTrending || loadingHorror || loadingTop;

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : isLoading ? ( // Show shimmer if any data is loading
        <Shimmer />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Browse;
