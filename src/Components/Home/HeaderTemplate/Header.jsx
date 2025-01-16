import { CiSearch } from "react-icons/ci";
import "./Header.css";
import { AiOutlineUser } from "react-icons/ai";
import { TbMessages } from "react-icons/tb";
import { IoAnalytics } from "react-icons/io5";
import { HiOutlineLogin, HiOutlineMoon } from "react-icons/hi";
import { RiSettingsLine } from "react-icons/ri";
import { DashboardContext } from "../../../context/DashboardContext";
import { useContext } from "react";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../../../Firebase";
const Header = () => {
  const { isDarkTheme, setIsDarkTheme, isUserLoggedIn } =
    useContext(DashboardContext);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("username");
        window.location.href = "/login";
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };
  return (
    <header className={`Header_container ${isDarkTheme && "dark"}`}>
      <form className="search_bar">
        <input type="text" placeholder="Search ..." />
        <CiSearch className="search_icon" />
      </form>
      <div className="tools">
        <AiOutlineUser className="icon" />
        <TbMessages className="icon" />
        <IoAnalytics className="icon" />
        <div className="divider"></div>
        <FiSun
          className="icon sun"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        />
        <HiOutlineMoon
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="icon moon"
        />
        <RiSettingsLine className="icon" />
        {isUserLoggedIn && (
          <HiOutlineLogin className="icon" onClick={handleLogout} />
        )}
        <div className="divider"></div>
        {isUserLoggedIn ? (
          <Link to="/profile" className="user">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
              alt=" user "
            />
          </Link>
        ) : (
          <Link to="/login" className="login_btn">
            <span className="user_name">Login</span>
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
