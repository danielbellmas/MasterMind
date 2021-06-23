import React, { useState, useContext } from "react";
import useStyles from "../styles/_sidebar";

const SideBar = ({ guessRecord }) => {
  const classes = useStyles();

  return (
    <aside className={classes.root}>
      {guessRecord.map((result, index) => (
        <span key={index} style={{ color: result["textColorOfGuess"] }}>
          {result["resultOfGuess"] + " "}
        </span>
      ))}
    </aside>
  );
};

export default SideBar;
