import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const showGpt = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in/up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOutBtn = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleToggleGpt = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full flex  md:flex-row justify-between z-10 bg-gradient-to-l from-black">
      <img
        className="md:w-32 w-20 md:mx-12 md:py-4 py-8 mx-2 "
        src={LOGO}
        alt="logo"
      />

      {user && (
        <div className="flex justify-center">
          <button
            className="my-6 px-2 py-2 mr-4 font-bold text-white p-2 text-sm md:text-lg "
            onClick={handleToggleGpt}
          >
            {showGpt ? "Homepage" : "GPT Search"}
          </button>
          {showGpt && (
            <select
              className="my-6 mr-4   rounded-lg text-white font-bold bg-transparent md:text-lg text-md"
              onChange={(e) => handleLanguageChange(e)}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.idetifier}
                  value={lang.idetifier}
                  className="bg-gray-900 text-md md:text-lg"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <div className="mt-7">
            <img
              className="w-10 h-10 mb-6 rounded-lg hidden md:block"
              src={user?.photoURL}
              alt="userIcon"
            />
          </div>
          <button
            className="md:my-6 md:mx-2 font-bold  text-white md:py-2 md:px-4 rounded-lg my-4 mr-4 md:text-lg text-sm"
            onClick={handleSignOutBtn}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
