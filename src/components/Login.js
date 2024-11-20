import { useRef, useState } from "react";
import { ValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const navigate = useNavigate();
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
    // console.log(errorMsg);
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
            photoURL:
              "https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229",
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
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          console.log(user);
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
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="absolute z-10">
      <div className="absolute py-2 px-8 bg-gradient-to-b from-black w-full">
        <img
          className="w-40"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" flex bg-black absolute flex-col  ml-[550px] mt-28 px-16 py-14 rounded-lg bg-opacity-85 w-[420px] text-white"
        >
          <h1 className="font-bold text-3xl mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-3 rounded-md bg-gray-800 "
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or Phone Number"
            className="p-4 my-3 rounded-md bg-gray-800 "
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-3 rounded-md bg-gray-800 "
          />
          <p className="text-red-500 pt-2 font-semibold">{errorMessage}</p>
          <button
            className="p-3 my-6 bg-red-600  font-semibold rounded-md "
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already registered? Sign In now."}
          </p>
        </form>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_small.jpg"
          alt="netflix poster"
        />
      </div>
    </div>
  );
};

export default Login;
