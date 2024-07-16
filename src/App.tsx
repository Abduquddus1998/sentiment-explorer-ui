import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";

import Simple from "./Containers/Simple";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Containers/Dashboard";
import Main from "./Components/Main";
import SentimentAnalysis from "./Components/SentimentAnalysis";
import Settings from "./Components/Settings";
import Profile from "./Components/Profile";

import { GlobalStyles, RootWrapper } from "./globalStyles";
import { darkTheme, lightTheme } from "./theme";

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

            <Route path="/main/analysis/:id" element={<SentimentAnalysis />} />

            <Route path="/main/settings" element={<Settings />} />
            <Route path="/main/profile" element={<Profile />} />
          </Route>
        </Routes>
      </RootWrapper>
    </ThemeProvider>
  );
}

export default App;
