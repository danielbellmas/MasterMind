import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import useStyles from "../styles/_peg";

const Peg = ({
  index,
  computerSet,
  guessRecord,
  setGuessRecord,
  currentPegGuessedColors,
  setCurrentPegGuessedColors,
  colorsDropDownList,
  setColorsDropDownList,
  disabled,
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
    if (colorPicked === computerColor) {
      resultOfGuess = "Direct Hit!";
      iconOfGuess = "success";
      textColorOfGuess = "black";
    } else if (computerSet.indexOf(colorPicked) !== -1) {
      resultOfGuess = "Hit!";
      iconOfGuess = "info";
      textColorOfGuess = "white";
    } else {
      resultOfGuess = "Miss!";
      iconOfGuess = "error";
      textColorOfGuess = "red";
    }
    Swal.fire({
      icon: iconOfGuess,
      title: resultOfGuess,
      width: "200px",
      showConfirmButton: false,
      timer: 1000,
    });
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
        handleMessageAfterGuess(selectedColor);
        setColor(selectedColor);
        console.log(selectedColor);
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
      style={{ background: `${color}` }}
      onClick={!isChanged && !disabled ? handleOnClick : null}
    ></div>
  );
};

export default Peg;
