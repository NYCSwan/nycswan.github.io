import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import themeResponsiveFonts from "./ThemeOptions.ts";
import "@fontsource/major-mono-display";
import "@fontsource-variable/rubik";
import "@fontsource-variable/rosario";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={themeResponsiveFonts}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
