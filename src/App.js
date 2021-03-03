import React, { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import ProdutsPage from "./pages/ProdutsPage/ProdutsPage";
import ThemeContext, { themes } from "./ThemeContext";
import { Button } from "@material-ui/core";

const App = () => {
  const [changeTemes, setChangeTemes] = useState(themes.dark);
  return (
    <ThemeContext.Provider value={changeTemes}>
      <Button onClick={() => setChangeTemes(themes.light)}>changeTemes</Button>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products/:id" component={ProdutsPage}></Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
