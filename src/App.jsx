import { useContext } from "react";
import { DashboardContext } from "./context/DashboardContext";
import { Route, Routes, useLocation } from "react-router";
import Home from "./Pages/Home/Home";
import Navigation from "./Components/Utils/Navigation/NavigationTemplate/Navigation";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";

function App() {
  const { isDarkTheme } = useContext(DashboardContext);
  const location = useLocation();

  return (
    <div className={`App ${isDarkTheme ? "dark" : ""}`}>
      {location.pathname !== "/login" && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
