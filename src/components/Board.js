import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Swal from "sweetalert2";
import useStyles from "../styles/_board";
import RowPegs from "./RowPegs";

function Board() {
  const [numOfGuesses, setNumOfGuesses] = useState(1);
  const classes = useStyles();

  useEffect(() => {
    // 11 beacuse we are starting at 1
    if (numOfGuesses === 11) {
      Swal.fire({
        icon: "error",
        title: "You Lost, Better Luck Next Time!",
        showConfirmButton: true,
        confirmButtonText: "New Game",
      }).then((result) => {
        localStorage.setItem(
          "lost",
          JSON.parse(localStorage.getItem("lost")) + 1
        );
        if (result.isConfirmed) window.location.reload();
      });
    }
  }, [numOfGuesses]);
  return (
    <Grid className={classes.container} container justify="space-around">
      {[...Array(10).keys()].map((item) => (
        <Grid item key={item}>
          <RowPegs
            key={item}
            rowIndex={item + 1}
            numOfGuesses={numOfGuesses}
            setNumOfGuesses={setNumOfGuesses}
            disabled={item + 1 !== numOfGuesses}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Board;
