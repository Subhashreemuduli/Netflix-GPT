import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ title }) => {
  const trailerUrl = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(title);

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={trailerUrl + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
