import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginbtn, setLoginBtn] = useState("Login");
  const { loggedinUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex align-middle justify-between items-center shadow-xl mb-4 p-2 bg-gray-100">
      <div className="logoContainer">
        <Link to="/">
          <img className="logo w-24" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="">
        <ul className="flex">
          <li className="px-3">
            <a>Online Status: {onlineStatus ? "✅" : "🔴"}</a>
          </li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3">
            <Link to="/instamart">Insta Mart</Link>
          </li>
          <li className="px-3">Cart</li>
          <li className="px-3">
            <button
              onClick={() => {
                loginbtn === "Login"
                  ? setLoginBtn("LOGOUT")
                  : setLoginBtn("Login");
              }}
            >
              {loginbtn}
            </button>
          </li>
          <li className=" font-bold">{loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
