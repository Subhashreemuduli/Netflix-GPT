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
    <div className="absolute py-2 px-8 bg-opacity-10 bg-black w-full flex justify-between z-10">
      <img className="w-40 " src={LOGO} alt="logo" />

      {user && (
        <div className="flex ">
          {showGpt && (
            <select
              className="m-2 py-1 px-2 bg-gray-600 rounded-lg text-white font-semibold "
              onChange={(e) => handleLanguageChange(e)}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.idetifier}
                  value={lang.idetifier}
                  className="bg-gray-600 "
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="m-4 font-bold text-white px-4 py-2 bg-red-700 rounded-lg"
            onClick={handleToggleGpt}
          >
            {showGpt ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-10 h-10 my-4 rounded-lg"
            src={user?.photoURL}
            alt="userIcon"
          />
          <button
            className="m-4 font-bold text-white bg-gray-500 py-2 px-4 rounded-lg"
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
