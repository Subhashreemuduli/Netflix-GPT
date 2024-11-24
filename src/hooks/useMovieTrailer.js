import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (title) => {
  //fetch trailer video and updating the store
  const dispatch = useDispatch();

  const apiKey = "AIzaSyBAXQVNOPj-0DfPFtfGcNBg9r6vAU7wGnw";
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title}&type=video&key=${apiKey}`;

  const getTrailer = async () => {
    const data = await fetch(apiUrl);
    const json = await data.json();
    const videoId = json.items[0].id.videoId;
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    dispatch(addTrailerVideo(embedUrl));
  };

  useEffect(() => {
    getTrailer();
  }, []);
};

export default useMovieTrailer;
