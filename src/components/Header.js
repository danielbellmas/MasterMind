import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import LevelSelect from "./LevelSelect";
import useStyles from "../styles/_header";

let executed = localStorage.getItem("RulesExecuted");

const Header = () => {
  const classes = useStyles();

  useEffect(() => {
    if (executed === null) {
      showRules();
      executed = true;
      localStorage.setItem("RulesExecuted", executed);
    }
  }, []);

  const showRules = () => {
    Swal.fire({
      title: "Rules",
      width: "900px",
      html: `<p class="swal-text">The computer will generate a combination of 4 unique colored pegs.<br/>
      you have 10 attempts to guess the correct combination.<br/>
      For each guess, you receive a result consisting of 3 colors according to the guess you made:<br/>
      1. When you guess the correct color in the correct position you receive a “Direct Hit” (Black).<br/>
      2. When you guess the correct color but in the wrong position you receive a “Hit” (White).<br/>
      3. When you guess a color that does not appear in the combination you receive a “Miss” (Red).<br/><br/>
      <b>To Start Click START and then click on one of the circles to choose a color.<br/><br/>
      Good Luck!</b></p>`,
      confirmButtonText: "START",
    });
  };

  const handleRestartGame = () => {
    Swal.fire({
      title: "Are you sure you want to start again?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };

  return (
    <header className={classes.header}>
      <h1>MasterMind</h1>

      <div>
        <Button
          className={classes.btn}
          color="primary"
          size="large"
          type="button"
          variant="contained"
          onClick={showRules}
        >
          Rules
        </Button>
        <Button
          className={classes.btn}
          size="large"
          type="button"
          variant="contained"
          component={Link}
          to="/statistics"
        >
          Statistics
        </Button>
        <Button
          color="secondary"
          size="large"
          type="button"
          variant="contained"
          onClick={handleRestartGame}
        >
          Restart Game
        </Button>
      </div>
      <LevelSelect />
    </header>
  );
};

export default Header;
