import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff7043",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
