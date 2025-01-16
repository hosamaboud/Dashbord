import { useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import "./Main.css";
import Header from "./HeaderTemplate/Header";
import Content from "./Content/Content";
const Main = () => {
  const { darkTheme } = useContext(DashboardContext);
  return (
    <div className={`main ${darkTheme && "dark"}`}>
      <Header />
      <Content />
    </div>
  );
};
export default Main;
