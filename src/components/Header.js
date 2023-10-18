import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginbtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logoContainer">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
