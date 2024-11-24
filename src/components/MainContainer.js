import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { image, title, categories, link } = mainMovie?.list[0];
  return (
    <div>
      <VideoTitle image={image} title={title} categories={categories} />
      <VideoBackground videoLink={link} title={title} />
    </div>
  );
};
export default MainContainer;
