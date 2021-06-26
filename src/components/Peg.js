import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useStyles from "../styles/_peg";

const incrementLocalStorage = (key) => {
  localStorage.setItem(key, JSON.parse(localStorage.getItem(key)) + 1);
};
export let played = false;

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
  levelSelected,
}) => {
  const [color, setColor] = useState("");
  const [isChanged, setIsChanged] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (played) {
      Swal.fire({
        title: "Changing the difficulty will restart the game",
        text: "Are you sure you want restart?",
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
    }
  }, [levelSelected]);

  const handleMessageAfterGuess = (selectedColor) => {
    let colorPicked = selectedColor;
    let computerColor = computerSet[index];

    let resultOfGuess = "";
    let textColorOfGuess = "";

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
        played = true;

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
