const Shimmer = () => {
  return (
    <div>
      <div className="flex justify-center flex-wrap py-28">
        {Array(20)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="w-56 h-56 bg-gray-900 m-4 p-4 rounded-lg opacity-70"
            ></div>
          ))}
      </div>
    </div>
  );
};
export default Shimmer;
