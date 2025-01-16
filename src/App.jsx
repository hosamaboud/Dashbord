import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Route, Routes, useLocation } from "react-router";
import Home from "./Pages/Home";
import Navigation from "./Components/Utils/Navigation/NavigationTemplate/Navigation";
import Login from "./Pages/Login/Login";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const location = useLocation();

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`App ${darkTheme ? "dark" : ""}`}>
        {location.pathname !== "/login" && <Navigation />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
