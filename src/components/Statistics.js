import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import { Button } from "@material-ui/core";

const initializeLocalStorage = (key) => {
  localStorage.setItem(
    key,
    localStorage.getItem(key) !== null ? localStorage.getItem(key) : 0
  );
};

const Statistics = () => {
  const [data, setData] = useState([]);
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
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <Button
        color="secondary"
        size="medium"
        type="button"
        variant="contained"
        component={Link}
        to="/"
      >
        Go to Game
      </Button>

      <CSVLink data={data} onClick={handleStatistics}>
        Export to CVS
      </CSVLink>
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
      </table>
    </div>
  );
};

export default Statistics;
