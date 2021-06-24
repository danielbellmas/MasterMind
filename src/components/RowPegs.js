import React, { useState, useEffect, useContext } from "react";
import { Grid } from "@material-ui/core";
import Peg from "../components/Peg";
import SideBar from "./SideBar";
import { COLORS, ComputerContext, LevelContext } from "../GameContext";
import Swal from "sweetalert2";

const RowPegs = ({ numOfGuesses, setNumOfGuesses, disabled, index }) => {
  const [currentPegGuessedColors, setCurrentPegGuessedColors] = useState([]);
  const [computerSet] = useContext(ComputerContext);
  const [levelSelected] = useContext(LevelContext);
  const [guessRecord, setGuessRecord] = useState([]);
  const [colorsDropDownList, setColorsDropDownList] = useState([]);
  const colorsByDifficulty = () => {
    let colors = [];
    switch (levelSelected) {
      case "Easy":
        colors = COLORS.slice(0, 7);
        break;
      case "Medium":
        colors = COLORS.slice(0, 10);
        break;
      default:
        colors = COLORS;
        break;
    }
    return colors.sort();
  };

  useEffect(() => {
    setColorsDropDownList(colorsByDifficulty());
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
        {[1, 2, 3, 4].map((item) => (
          <Peg
            key={item}
            index={item - 1}
            rowIndex={index}
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
          />
        ))}
        <SideBar key={numOfGuesses} guessRecord={guessRecord} />
      </Grid>
    </Grid>
  );
};

export default RowPegs;
