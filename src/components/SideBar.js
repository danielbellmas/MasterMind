import React from "react";
import useStyles from "../styles/_sidebar";

const SideBar = ({ guessRecord }) => {
  const classes = useStyles();

  return (
    <aside className={classes.root}>
      {guessRecord.map((result, index) => (
        <span key={index} style={{ color: result["textColorOfGuess"] }}>
          {result["resultOfGuess"] +
            (index !== guessRecord.length - 1 ? "-" : "")}
        </span>
      ))}
    </aside>
  );
};

export default SideBar;
