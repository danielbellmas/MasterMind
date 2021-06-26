import React, { useState, useEffect, createContext } from "react";

export const ComputerContext = createContext();
export const LevelContext = createContext();

export const COLORS = [
  "blue",
  "orange",
  "green",
  "purple",
  "pink",
  "red",
  "yellow",
  "black",
  "brown",
  "aqua",
  "chocolate",
  "crimson",
];

export const colorsByDifficulty = {
  Easy: COLORS.slice(0, 7).sort(),
  Medium: COLORS.slice(0, 10).sort(),
  Difficult: COLORS.sort(),
};

export const ComputerProvider = (props) => {
  const [computerSet, setComputerSet] = useState([]);
  const [levelSelected, setLevelSelected] = useState("Easy");

  useEffect(() => {
    createUniquePegSet();
  }, [levelSelected]);
  const createUniquePegSet = () => {
    let ComputerpegSet = [];
    while (ComputerpegSet.length < 4) {
      let colorsByLevel = colorsByDifficulty[levelSelected];
      let rand =
        colorsByLevel[Math.floor(Math.random() * colorsByLevel.length)];
      if (ComputerpegSet.indexOf(rand) === -1) ComputerpegSet.push(rand);
    }
    setComputerSet(ComputerpegSet);
  };
  console.log(computerSet);
  return (
    <ComputerContext.Provider value={[computerSet, setComputerSet]}>
      <LevelContext.Provider value={[levelSelected, setLevelSelected]}>
        {props.children}
      </LevelContext.Provider>
    </ComputerContext.Provider>
  );
};
