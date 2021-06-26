import React, { useState, useEffect, useContext } from "react";
import { Grid } from "@material-ui/core";
import Peg from "../components/Peg";
import SideBar from "./SideBar";
import { COLORS, ComputerContext, LevelContext } from "../GameContext";
import Swal from "sweetalert2";
import { colorsByDifficulty } from "../GameContext";

const RowPegs = ({ numOfGuesses, setNumOfGuesses, disabled, rowIndex }) => {
  const [currentPegGuessedColors, setCurrentPegGuessedColors] = useState([]);
  const [guessRecord, setGuessRecord] = useState([]);
  const [colorsDropDownList, setColorsDropDownList] = useState([]);

  const [computerSet] = useContext(ComputerContext);
  const [levelSelected] = useContext(LevelContext);

  useEffect(() => {
    setColorsDropDownList(colorsByDifficulty[levelSelected]);
  }, [levelSelected]);

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
      } else {
        setNumOfGuesses(numOfGuesses + 1);
      }
    }
  }, [currentPegGuessedColors]);

  return (
    <Grid container>
      <Grid item style={{ display: "flex" }}>
        {[...Array(4).keys()].map((item) => (
          <Peg
            key={item}
            index={item}
            rowIndex={rowIndex}
            computerSet={computerSet}
            guessRecord={guessRecord}
            setGuessRecord={setGuessRecord}
            COLORS={COLORS}
            currentPegGuessedColors={currentPegGuessedColors}
            setCurrentPegGuessedColors={setCurrentPegGuessedColors}
            colorsDropDownList={colorsDropDownList}
            setColorsDropDownList={setColorsDropDownList}
            disabled={disabled}
            numOfGuesses={numOfGuesses}
            levelSelected={levelSelected}
          />
        ))}
        <SideBar key={numOfGuesses} guessRecord={guessRecord} />
      </Grid>
    </Grid>
  );
};

export default RowPegs;
