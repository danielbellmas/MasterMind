import React, { useContext } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import useStyles from "../styles/_levelselect";
import { LevelContext } from "../GameContext";

export default function LevelSelect() {
  const classes = useStyles();
  const [levelSelected, setLevelSelected] = useContext(LevelContext);

  const handleChange = (event) => {
    setLevelSelected(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={levelSelected}
          onChange={handleChange}
        >
          <MenuItem value={"Easy"}>Easy</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"Difficult"}>Difficult</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
