import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const VideoTitle = ({ image, title, categories }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black">
      <img src={image} alt="movie-image" className="w-28 rounded-3xl py-2" />
      <h1 className="font-bold text-2xl py-2 text-white">{title}</h1>
      <p className="text-lg w-10/12 pb-4 pt-2 text-white">
        {categories.join(", ")}
      </p>
      <div>
        <button className="py-2 px-8 my-2 bg-white text-black rounded-md hover:opacity-80 text-lg font-semibold">
          <PlayArrowIcon fontSize="large" />
          Play
        </button>
        <button className="py-2 px-8 m-2 bg-gray-200 text-white rounded-md text-lg font-semibold bg-opacity-30 hover:opacity-80">
          <InfoOutlinedIcon fontSize="large" /> More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
