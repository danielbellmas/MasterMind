import React from "react";
import useStyles from "../styles/_sidebar";

const compare = (a, b) => {
  a = a.index;
  b = b.index;
  if (a > b) return 1;
  if (b > a) return -1;
  return 0;
};

const SideBar = ({ guessRecord }) => {
  const classes = useStyles();

  return (
    <aside className={classes.root}>
      {guessRecord.sort(compare).map((result, index) => (
        <span key={index} style={{ color: result.textColorOfGuess }}>
          {result.resultOfGuess + (index !== guessRecord.length - 1 ? "-" : "")}
        </span>
      ))}
    </aside>
  );
};

export default SideBar;
