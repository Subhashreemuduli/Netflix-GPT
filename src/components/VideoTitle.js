import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const VideoTitle = ({ image, title, categories }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-16 absolute bg-gradient-to-r from-black">
      <h1 className="font-bold md:text-3xl text-xl py-2 text-white">{title}</h1>
      <p className="text-lg w-10/12 pb-4 pt-2 text-white hidden md:block ">
        {categories.join(", ")}
      </p>
      <div>
        <button className="md:py-2 md:px-8 md:my-2 px-4 py-1 my-0  bg-white text-black rounded-md hover:opacity-80 md:text-lg text-md font-semibold">
          <PlayArrowIcon fontSize="medium" />
          Play
        </button>
        <button className="md:py-2 md:px-8 md:m-2 px-4 m-2 py-1 bg-gray-200 text-white rounded-md md:text-lg text-md font-semibold bg-opacity-30 hover:opacity-80">
          <InfoOutlinedIcon fontSize="medium" /> More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
