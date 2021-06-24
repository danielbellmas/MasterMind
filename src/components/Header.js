import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import LevelSelect from "./LevelSelect";
import useStyles from "../styles/_header";

let executed = false;

const Header = () => {
  const classes = useStyles();

  useEffect(() => {
    if (!executed) {
      showRules();
      executed = true;
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
      <b>To Start Click OK and then click on one of the circles to choose a color.<br/><br/>
      Good Luck!</b></p>`,
    });
  };
  return (
    <header className={classes.header}>
      <h1>MasterMind</h1>

      <div>
        <Button
          color="primary"
          className="rules-btn"
          size="large"
          type="button"
          variant="contained"
          onClick={showRules}
          style={{ marginRight: "7px" }}
        >
          Rules
        </Button>
        <Button
          className="rules-btn"
          size="large"
          type="button"
          variant="contained"
          component={Link}
          to="/statistics"
        >
          Statistics
        </Button>
      </div>
      <LevelSelect />
    </header>
  );
};

export default Header;
