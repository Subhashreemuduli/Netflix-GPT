import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  return (
    <div className=" ml-[30%] ">
      <form className="bg-black absolute mt-[-50%] grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey]?.placeHolderText}
          className="py-2 px-4 m-2 text-black text-lg col-span-10"
        />
        <button className=" m-2 px-4 bg-red-500 text-white text-lg rounded-lg col-span-2 font-semibold">
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
