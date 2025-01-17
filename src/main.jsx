import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import DashboardProvider from "./context/DashboardContext.jsx";

createRoot(document.getElementById("root")).render(
  <DashboardProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </DashboardProvider>
);
