import { useContext } from "react";
import "./NavLogin.css";
import { DashboardContext } from "../../../context/DashboardContext";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";
import { Link } from "react-router";
import { IoArrowBackOutline } from "react-icons/io5";
const NavLogin = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(DashboardContext);
  return (
    <div className="login_nav">
      <Link to={"/"} className="login_logo">
        <IoArrowBackOutline className="icon" />
      </Link>
      <div onClick={() => setIsDarkTheme(!isDarkTheme)} id="dark_theme">
        {isDarkTheme ? (
          <HiOutlineMoon className="icon" />
        ) : (
          <FiSun className="icon" />
        )}
      </div>
    </div>
  );
};
export default NavLogin;
