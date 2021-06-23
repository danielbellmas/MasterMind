import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Header = () => {
  const showRules = () => {
    Swal.fire({
      title: "Rules",
      width: "900px",
      html: `<p class="swal-text">The computer will generate a combination of 4 out of 7 unique colored pegs.<br/>
      The player has 10 attempts to guess the correct combination.<br/>
      For each guess, the player receives a result consisting of 3 colors according to the guess he made:<br/>
      1. When the player guesses the correct color in the correct position they receive a “Direct Hit” (Black).<br/>
      2. When the player guesses the correct color but in the wrong position they receive a “Hit” (White).<br/>
      3. When the player guesses a color that does not appear in the combination they receive a “Miss” (Red).<br/><br/>
      <b>To Start Click OK and then click on one of the circles to choose a color.<br/><br/>
      Good Luck!</b></p>`,
    });
  };
  return (
    <header style={{ display: "grid", placeItems: "center" }}>
      <h1>MasterMind</h1>

      <div style={{ gridAutoFlow: "column" }}>
        <Button
          color="primary"
          className="rules-btn"
          size="large"
          type="button"
          variant="contained"
          onClick={showRules}
        >
          Rules
        </Button>
        <Button
          //   color="secondary"
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
    </header>
  );
};

export default Header;
