import Header from "./Header";
import { useState, useRef } from "react";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase"; 
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null); 
  const dispatch = useDispatch();

  const toggelSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const nameValue = isSignInForm ? "" : name.current.value;
    const message = checkValidData(
      nameValue,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) {
      return;
    }

    // sign up
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "",
          })
            .then(() => {
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
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("signInWithEmailAndPassword ", +user); 
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:`url(${BACKGROUND_IMAGE})`,
        }}
      ></div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 p-12 m-36 bg-black/80 absolute mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="py-2 px-2 m-2 w-full bg-gray-700 rounded-lg"
          />
        )}

        <input
          type="text"
          ref={email}
          placeholder="Enter Email Address"
          className="py-2 px-2 m-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-2 px-2 m-2 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 px-2 font-bold ">{errorMessage}</p>

        <button
          className="p-4 m-2 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
