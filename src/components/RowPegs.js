import React, { useState, useEffect, useContext } from "react";
import { Grid } from "@material-ui/core";
import Peg from "../components/Peg";
import SideBar from "./SideBar";
import { COLORS, ComputerContext } from "../GameContext";
import Swal from "sweetalert2";

const RowPegs = ({ numOfGuesses, setNumOfGuesses, disabled }) => {
  const [currentPegGuessedColors, setCurrentPegGuessedColors] = useState([]);
  const [computerSet] = useContext(ComputerContext);
  const [guessRecord, setGuessRecord] = useState([]);
  const [colorsDropDownList, setColorsDropDownList] = useState(COLORS);

  //Check if user won and show message
  useEffect(() => {
    if (currentPegGuessedColors.length === 4) {
      let didWin = true;
      for (let i = 0; i < 4; i++) {
        if (currentPegGuessedColors[i] !== computerSet[i]) {
          didWin = false;
          break;
        }
      }
      if (didWin) {
        Swal.fire({
          icon: "success",
          title: "YOU WON!",
          showConfirmButton: true,
          confirmButtonText: "New Game",
        }).then((result) => {
          localStorage.setItem(
            "won",
            JSON.parse(localStorage.getItem("won")) + 1
          );
          if (result.isConfirmed) window.location.reload();
        });
      } else setNumOfGuesses(numOfGuesses + 1);
      console.log(numOfGuesses);
    }
  }, [currentPegGuessedColors]);

  return (
    <Grid container>
      <Grid item style={{ display: "flex" }}>
        {[1, 2, 3, 4].map((item) => (
          <Peg
            key={item}
            index={item - 1}
            computerSet={computerSet}
            guessRecord={guessRecord}
            setGuessRecord={setGuessRecord}
            COLORS={COLORS}
            currentPegGuessedColors={currentPegGuessedColors}
            setCurrentPegGuessedColors={setCurrentPegGuessedColors}
            colorsDropDownList={colorsDropDownList}
            setColorsDropDownList={setColorsDropDownList}
            disabled={disabled}
          />
        ))}
        <SideBar key={numOfGuesses} guessRecord={guessRecord} />
      </Grid>
    </Grid>
  );
};

export default RowPegs;
