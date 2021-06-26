import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import { Button } from "@material-ui/core";
import useStyles from "../../styles/Statistics/_statistics";
import StatisticsTable from "./StatisticsTable";

const initializeLocalStorage = (key) => {
  localStorage.setItem(
    key,
    localStorage.getItem(key) !== null ? localStorage.getItem(key) : 0
  );
};

const Statistics = () => {
  const classes = useStyles();

  useEffect(() => {
    //Initialize lost and won data
    initializeLocalStorage("won");
    initializeLocalStorage("lost");
    initializeLocalStorage("Direct Hit");
    initializeLocalStorage("Hit");
    initializeLocalStorage("Miss");
  }, []);

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

  return (
    <div className={classes.statistics}>
      <Button
        className={classes.btn}
        color="secondary"
        size="medium"
        type="button"
        variant="contained"
        component={Link}
        to="/"
      >
        Back to Game
      </Button>
      <div className={classes.table}>
        <CSVLink filename="MasterMind_Report.csv" data={data}>
          <i
            class="fa fa-download"
            aria-hidden="true"
            title="Export to CSV"
          ></i>
        </CSVLink>
        <StatisticsTable data={data} />
      </div>
    </div>
  );
};

export default Statistics;
