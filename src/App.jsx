import { useState } from "react";
import Navigation from "./Components/NavigationTemplate/Navigation";
import { ThemeContext } from "./context/ThemeContext";
import Main from "./Components/Main/Main";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`App ${darkTheme && "dark"}`}>
        {/* navigation */}
        <Navigation />
        {/* main */}
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
