import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core";
import store from "./redux/store";
import Home from "./Home";
import { Provider } from "react-redux";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    spacing: 4,
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3EA6FF",
      },
      background: {
        default: darkMode ? "#232323" : "#FFF",
        dark: darkMode ? "#181818" : "#f4f6f8",
        paper: darkMode ? "#232323" : "#FFF",
      },
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
