import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import { Button } from "@material-ui/core";

const Statistics = () => {
  const [csvReport, setCsvReport] = useState({});
  useEffect(() => {
    //Initialize lost and won data
    localStorage.setItem("lost", 0);
    localStorage.setItem("won", 0);
  }, []);

  const handleStatistics = () => {
    const data = [
      { won: `localStorage.getItem("won")` },
      { lost: `localStorage.getItem("lost")` },
    ];

    const headers = [
      { label: "Won", key: "won" },
      { label: "Lost", key: "lost" },
    ];

    setCsvReport({
      filename: "Statistics.csv",
      headers: headers,
      data: data,
    });
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

      {/* <CSVLink {...csvReport}>Export to CVS</CSVLink> */}
    </div>
  );
};

export default Statistics;
