import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (title) => {
  //fetch trailer video and updating the store
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useEffect(() => {
    if (!trailerVideo) {
      getTrailer();
    }
  }, []);

  const getTrailer = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title}&type=video&key=${apiKey}`;
    const data = await fetch(apiUrl);
    const json = await data?.json();
    const videoId = json?.items[0]?.id?.videoId;
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    dispatch(addTrailerVideo(embedUrl));
  };
};

export default useMovieTrailer;
