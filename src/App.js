import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { Paper, Typography, Grid, Container, Button } from "@material-ui/core";
import Board from "./components/Board";
import Header from "./components/Header";
import Statistics from "./components/Statistics";

const App = () => {
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
