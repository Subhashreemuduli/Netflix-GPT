import { useRef, useState } from "react";
import { ValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import Header from "./Header";
import { NETFLIX_POSTER, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const errorMsg = ValidateData(
      name?.current?.value,
      email.current.value,
      password.current.value,
      isSignInForm
    );
    setErrorMessage(errorMsg);

    if (errorMsg) return;
    if (!isSignInForm) {
      //sign up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign In logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src={NETFLIX_POSTER}
          alt="netflix poster"
          className="h-screen object-cover w-screen"
        />
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" flex bg-black absolute flex-col mt-36  px-8 py-8 rounded-lg bg-opacity-85 md:w-[400px] mx-[10%] text-white"
        >
          <h1 className="font-bold md:text-2xl text-xl md:mb-6 mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-3 rounded-md bg-gray-800 md:text-md text-sm"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or Phone Number"
            className="p-4 my-3 rounded-md bg-gray-800 md:text-md text-sm"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-3 rounded-md bg-gray-800 md:text-md text-sm"
          />
          <p className="text-red-500 pt-2 font-semibold md:text-md text-sm">
            {errorMessage}
          </p>
          <button
            className="p-3 mt-4  bg-red-600  font-semibold rounded-md md:text-md text-sm"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-6 cursor-pointer md:text-md text-sm"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already registered? Sign In now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
