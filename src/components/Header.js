import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

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

  return (
    <div className="absolute py-2 px-8 bg-opacity-10 bg-black w-full flex justify-between z-10">
      <img className="w-40 " src={LOGO} alt="logo" />

      {user && (
        <div className="flex ">
          <img
            className="w-10 h-10 my-4 rounded-lg"
            src={user?.photoURL}
            alt="userIcon"
          />
          <button
            className="m-4 font-bold text-white"
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
