import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";

import Simple from "./Containers/Simple";
import Login from "./Components/Login";

import { GlobalStyles, RootWrapper } from "./globalStyles";
import { darkTheme, lightTheme } from "./theme";
import Register from "./Components/Register";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <RootWrapper>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Simple />}>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </RootWrapper>
    </ThemeProvider>
  );
}

export default App;
