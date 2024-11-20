import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOutBtn = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute py-2 px-8 bg-opacity-10 bg-black w-full flex justify-between">
      <img
        className="w-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex">
        <img
          className="w-10 h-10 m-4 rounded-lg"
          src={user?.photoURL}
          alt="userIcon"
        />
        <button className="m-4 font-bold" onClick={handleSignOutBtn}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
