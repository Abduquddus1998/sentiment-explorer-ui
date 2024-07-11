import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";

import Simple from "./Containers/Simple";
import Login from "./Components/Login";

import { GlobalStyles, RootWrapper } from "./globalStyles";
import { darkTheme, lightTheme } from "./theme";
import Register from "./Components/Register";
import Dashboard from "./Containers/Dashboard";
import Main from "./Components/Main";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <RootWrapper>
        <Routes>
          <Route path="/" element={<Simple />}>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/main" element={<Dashboard />}>
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </RootWrapper>
    </ThemeProvider>
  );
}

export default App;
