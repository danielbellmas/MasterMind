import React, { useState, useEffect, createContext } from "react";

export const ComputerContext = createContext();

export const COLORS = [
  "blue",
  "orange",
  "green",
  "purple",
  "pink",
  "red",
  "yellow",
];

export const ComputerProvider = (props) => {
  const [computerSet, setComputerSet] = useState([]);
  useEffect(() => {
    createUniquePegSet();
  }, []);
  console.log({ computerSet });
  const createUniquePegSet = () => {
    let ComputerpegSet = [];
    while (ComputerpegSet.length < 4) {
      let rand = COLORS[Math.floor(Math.random() * 7)];
      if (ComputerpegSet.indexOf(rand) === -1) ComputerpegSet.push(rand);
    }
    setComputerSet(ComputerpegSet);
  };

  return (
    <ComputerContext.Provider value={[computerSet, setComputerSet]}>
      {props.children}
    </ComputerContext.Provider>
  );
};
