import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Main.css";
import Header from "./HeaderTemplate/Header";
import Content from "./Content/Content";
const Main = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={`main ${darkTheme && "dark"}`}>
      <Header />
      <Content />
    </div>
  );
};
export default Main;
