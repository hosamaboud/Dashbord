import { CiSearch } from "react-icons/ci";
import "./Header.css";
import { AiOutlineUser } from "react-icons/ai";
import { TbMessages } from "react-icons/tb";
import { IoAnalytics } from "react-icons/io5";
import { HiOutlineLogin, HiOutlineMoon } from "react-icons/hi";
import { RiSettingsLine } from "react-icons/ri";
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";
import { FiSun } from "react-icons/fi";
const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <header className={`Header_container ${darkTheme && "dark"}`}>
      <form className="search_bar">
        <input type="text" placeholder="Search ..." />
        <CiSearch className="search_icon" />
      </form>
      <div className="tools">
        <AiOutlineUser className="icon" />
        <TbMessages className="icon" />
        <IoAnalytics className="icon" />
        <div className="divider"></div>
        <FiSun className="icon sun" onClick={() => setDarkTheme(!darkTheme)} />
        <HiOutlineMoon
          onClick={() => setDarkTheme(!darkTheme)}
          className="icon moon"
        />
        <RiSettingsLine className="icon" />
        <HiOutlineLogin className="icon" />
        <div className="divider"></div>
        <div className="user">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
            alt=" user "
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
