import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggelSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/30c8b9f4-3db9-4b3b-a1ee-8fa56531b712/web/GB-en-20251201-TRIFECTA-perspective_4f0dccae-87a2-42e3-a9ef-424c59a24c99_large.jpg')",
        }}
      ></div>

      <form className="w-1/4 p-12 m-36 bg-black/80 absolute mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="py-2 px-2 m-2 w-full bg-gray-700 rounded-lg"
          />
        )}

        <input
          type="text"
          placeholder="Enter Email Address"
          className="py-2 px-2 m-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="py-2 px-2 m-2 w-full bg-gray-700 rounded-lg"
        />

        <button className="p-4 m-2 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 px-4 cursor-pointer" onClick={toggelSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
