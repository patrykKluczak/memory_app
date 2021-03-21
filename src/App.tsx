import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./theme/GlobalStyles";
import variables from "./theme/variables";

import Layout from "./Layout";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Leaderboards from "./pages/Leaderboards";

const App = () => (
  <ThemeProvider theme={variables}>
    <GlobalStyles />
    <Layout>
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/game">
          <Game />
        </Route>
        <Route exact path="/leaderboards">
          <Leaderboards />
        </Route>
      </BrowserRouter>
    </Layout>
  </ThemeProvider>
);

export default App;
