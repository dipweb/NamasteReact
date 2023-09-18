import { useState } from "react";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
import UserContex from "../util/UserContext";
import { useContext } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const userStatus = useOnlineStatus();
  const { loggidInUser } = useContext(UserContex);

  console.log(loggidInUser);
  console.log("userStatus in Header:  ", userStatus);

  return (
    <div className="flex justify-between bg-red-300 items-center px-10 py-1">
      <div className="logo">
        <img className="w-16 rounded-lg" src={logo} alt="Logo" />
      </div>
      <div>
        <nav>
          <ul className="flex">
            <li className="px-2">
              <span>User Status : </span>
              {userStatus === "online" ? (
                <span> Online</span>
              ) : (
                <span>Offline</span>
              )}
            </li>
            <li className="px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="/about">About</Link>
            </li>
            <li className="px-2">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-2">
              <Link to="/groceries">Groceries</Link>
            </li>
            <li className="px-2">
              {/* <button
                onClick={() => {
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                }}
              >
                {btnName}
              </button> */}
              {loggidInUser}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
