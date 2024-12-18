import { Link } from "react-router-dom";

const MovieDetails = ({ text, link, starring }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h3 className="text-md font-bold mb-2">{text}</h3>
      {link ? (
        <button className="p-2  bg-gray-200 text-white rounded-md md:text-sm text-sm font-semibold bg-opacity-30 hover:opacity-80">
          <Link to={link} target="_blank">
            More Info
          </Link>
        </button>
      ) : (
        <p className="text-sm w-full text-wrap">Starring: {starring}</p>
      )}
    </div>
  );
};

export default MovieDetails;
