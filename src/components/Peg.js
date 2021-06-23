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
    let iconOfGuess = "";
    let textColorOfGuess = "";
    console.log({ computerColor });
    console.log({ colorPicked });
    if (colorPicked === computerColor) {
      resultOfGuess = "Direct Hit";
      iconOfGuess = "success";
      textColorOfGuess = "black";
    } else if (computerSet.indexOf(colorPicked) !== -1) {
      resultOfGuess = "Hit";
      iconOfGuess = "info";
      textColorOfGuess = "white";
    } else {
      resultOfGuess = "Miss";
      iconOfGuess = "error";
      textColorOfGuess = "red";
    }
    incrementLocalStorage(resultOfGuess);
    // Swal.fire({
    //   icon: iconOfGuess,
    //   title: resultOfGuess,
    //   width: "200px",
    //   showConfirmButton: false,
    //   timer: 1000,
    // });
    setGuessRecord([...guessRecord, { textColorOfGuess, resultOfGuess }]);
  };

  const handleOnClick = () => {
    Swal.fire({
      width: "300px",
      input: "select",
      inputOptions: colorsDropDownList,
    }).then((result) => {
      if (result.dismiss !== Swal.DismissReason.backdrop) {
        let selectedColor = colorsDropDownList[parseInt(result.value)];
        console.log(colorsDropDownList);
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
      }}
      onClick={!isChanged && !disabled ? handleOnClick : null}
    ></div>
  );
};

export default Peg;
