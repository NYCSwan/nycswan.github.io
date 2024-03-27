import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import themeResponsiveFonts from "./ThemeOptions.ts";
import "@fontsource/major-mono-display";
import "@fontsource-variable/rubik";
import "@fontsource-variable/rosario";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeResponsiveFonts}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
