import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store =>  store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-36"
        src="https://logo.svgcdn.com/l/netflix.svg "
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
