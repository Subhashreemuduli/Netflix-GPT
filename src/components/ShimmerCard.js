const ShimmerCard = () => {
  return (
    <div>
      <div className="flex justify-center flex-wrap md:py-56 pt-36">
        {Array(10)
          .fill()
          .map((_, index) => (
            <div>
              <div
                key={index}
                className="w-60 h-56 bg-gray-900 m-4 p-4 rounded-lg "
              ></div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ShimmerCard;
