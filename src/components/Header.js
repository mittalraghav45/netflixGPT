import { signOut } from "firebase/auth"; 
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { LOGO, PHOTO_URL } from "../utils/constant";


const Header = () => {
  
  const navigate = useNavigate();
  const user = useSelector(store =>  store.user);
  const dispatch= useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => { 
      })
      .catch((error) => {
        navigate("/error");
      });
  };

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) { 
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ 
          uid: uid, 
          email: email, 
          displayName: displayName ,
          photoURL:PHOTO_URL}));
          navigate('/browse');
         
      } else { 
        dispatch(removeUser());
        navigate('/');

      }
    });
    //calls so that the ehader doesnt check user login again and again, , unsubscribe when the componenet unmounts
    return()=>unsubscribe();
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-36"
        src={LOGO}
        alt="Netflix logo"
      />
     { user && <div className="flex p-2">
        <img 
        className="w-12 h-12 p-" 
        alt="userIcon" 
        src={user.photoURL} 
        />
        <button onClick={handleSignOut} className="font-bold text-white ">
          Sign Out
        </button>
      </div>}
    </div>
  );
};
export default Header;
