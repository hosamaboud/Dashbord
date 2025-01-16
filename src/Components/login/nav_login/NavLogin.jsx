import { useContext } from "react";
import "./NavLogin.css";
import { ThemeContext } from "../../../context/ThemeContext";
import { FiSun } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";
import { Link } from "react-router";
import { IoArrowBackOutline } from "react-icons/io5";
const NavLogin = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <div className="login_nav">
      <Link to={"/"} className="login_logo">
        <IoArrowBackOutline className="icon" />
      </Link>
      <div onClick={() => setDarkTheme(!darkTheme)} id="dark_theme">
        {darkTheme ? (
          <HiOutlineMoon className="icon" />
        ) : (
          <FiSun className="icon" />
        )}
      </div>
    </div>
  );
};
export default NavLogin;
