import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  circle: {
    border: "2px solid black",
    borderRadius: "50%",
    background: "white",
    width: "50px",
    height: "50px",
    display: "flex",
    margin: "1px",
    boxShadow: "2px 6px 22px -6px rgba(0,0,0,0.75)",
  },
}));
