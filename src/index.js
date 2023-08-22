// Import necessary dependencies and components
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DarkModeProvider } from "./Components/DarkMode/DarkModeContext";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

