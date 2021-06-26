import React, { useState } from "react";
import Swal from "sweetalert2";
import useStyles from "../styles/_peg";

const incrementLocalStorage = (key) => {
  localStorage.setItem(key, JSON.parse(localStorage.getItem(key)) + 1);
};

const Peg = ({
  index,
  rowIndex,
  computerSet,
  guessRecord,
  setGuessRecord,
  currentPegGuessedColors,
  setCurrentPegGuessedColors,
  colorsDropDownList,
  setColorsDropDownList,
  disabled,
  numOfGuesses,
}) => {
  const [color, setColor] = useState("");
  const [isChanged, setIsChanged] = useState(false);
  const classes = useStyles();

  const handleMessageAfterGuess = (selectedColor) => {
    let colorPicked = selectedColor;
    let computerColor = computerSet[index];

    let resultOfGuess = "";
    let textColorOfGuess = "";
    console.log({ computerColor });
    console.log({ colorPicked });
    if (colorPicked === computerColor) {
      resultOfGuess = "Direct Hit";
      textColorOfGuess = "black";
    } else if (computerSet.indexOf(colorPicked) !== -1) {
      resultOfGuess = "Hit";
      textColorOfGuess = "white";
    } else {
      resultOfGuess = "Miss";
      textColorOfGuess = "red";
    }
    incrementLocalStorage(resultOfGuess);

    setGuessRecord([
      ...guessRecord,
      { index, textColorOfGuess, resultOfGuess },
    ]);
  };

  const handleOnClick = () => {
    Swal.fire({
      width: "300px",
      input: "select",
      inputOptions: colorsDropDownList,
    }).then((result) => {
      if (result.dismiss !== Swal.DismissReason.backdrop) {
        let selectedColor = colorsDropDownList[parseInt(result.value)];
        handleMessageAfterGuess(selectedColor);
        setColor(selectedColor);
        setCurrentPegGuessedColors([...currentPegGuessedColors, selectedColor]);

        //Filters out the color that has been selected
        setColorsDropDownList(
          colorsDropDownList.filter((color) => {
            return color !== selectedColor;
          })
        );

        setIsChanged(true);
      }
    });
  };

  return (
    <div
      className={classes.circle}
      style={{
        background:
          disabled && rowIndex > numOfGuesses ? "lightgrey" : `${color}`,
        cursor: !isChanged && !disabled ? "pointer" : "default",
      }}
      onClick={!isChanged && !disabled ? handleOnClick : null}
    ></div>
  );
};

export default Peg;
