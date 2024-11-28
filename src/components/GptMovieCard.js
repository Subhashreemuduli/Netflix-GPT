const GptMovieCard = ({ poster, text }) => {
  if (!poster) return null;
  return (
    <div className="mb-4 pr-4 w-48 flex-shrink-0 ">
      <img
        className="w-full h-56 object-cover rounded-lg"
        src={poster}
        alt={text}
      />
    </div>
  );
};
export default GptMovieCard;
