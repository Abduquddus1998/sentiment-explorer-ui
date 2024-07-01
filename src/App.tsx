import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./globalStyles";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <h1>Sentiment explorer</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
