import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const DashboardContext = createContext();
const DashboardProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("username");
        setIsUserLoggedIn(false);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };
  return (
    <DashboardContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        isUserLoggedIn,
        setIsUserLoggedIn,
        handleLogout,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
