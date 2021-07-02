import React, { useContext } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import useStyles from "../styles/_levelSelect";
import { LevelContext } from "../GameContext";
import Swal from "sweetalert2";

export default function LevelSelect() {
  const classes = useStyles();
  const [levelSelected, setLevelSelected] = useContext(LevelContext);

  const handleChange = (event) => {
    const level = event.target.value;
    localStorage.setItem("level", level);
    setLevelSelected(level);

    Swal.fire({
      icon: "success",
      title: "Difficulty Level Changed",
      taxt: "Good Luck!",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.select} id="select-label">
          Level
        </InputLabel>
        <Select
          className={classes.select}
          labelId="select-label"
          id="select"
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
