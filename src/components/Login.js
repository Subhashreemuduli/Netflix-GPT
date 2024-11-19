import { useRef, useState } from "react";
import Header from "./Header";
import { ValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

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
    console.log(errorMsg);
    setErrorMessage(errorMsg);
  };

  return (
    <div className="absolute z-10">
      <Header />
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
