import React from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Container } from "@material-ui/core";
import Board from "./components/Board";
import Header from "./components/Header";
import Statistics from "./components/Statistics/Statistics";

const App = () => {
  ReactGA.initialize("UA-202264338-2");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <Router>
      <Switch>
        <Route exact path="/statistics" component={Statistics} />
        <div className="app">
          <Header />
          <Container style={{ width: "800px", height: "auto" }}>
            <Board />
          </Container>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
