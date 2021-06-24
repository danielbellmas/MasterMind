import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import { Button } from "@material-ui/core";
import useStyles from "../styles/_statistics";

const initializeLocalStorage = (key) => {
  localStorage.setItem(
    key,
    localStorage.getItem(key) !== null ? localStorage.getItem(key) : 0
  );
};

const Statistics = () => {
  const [data, setData] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    //Initialize lost and won data
    initializeLocalStorage("won");
    initializeLocalStorage("lost");
    initializeLocalStorage("Direct Hit");
    initializeLocalStorage("Hit");
    initializeLocalStorage("Miss");
  }, []);

  const handleStatistics = () => {
    const data = [
      ["Won", "Lost", "Direct Hit", "Hit", "Miss"],
      [
        localStorage.getItem("won"),
        localStorage.getItem("lost"),
        localStorage.getItem("Direct Hit"),
        localStorage.getItem("Hit"),
        localStorage.getItem("Miss"),
      ],
    ];
    setData(data);
  };
  return (
    <div className={classes.btns}>
      <Button
        color="secondary"
        size="medium"
        type="button"
        variant="contained"
        component={Link}
        to="/"
      >
        Back to Game
      </Button>

      <CSVLink data={data} onClick={handleStatistics}>
        Export to CSV
      </CSVLink>
    </div>
  );
};

export default Statistics;
