import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/wood-background.jpg";

export default makeStyles(() => ({
  statistics: {
    display: "grid",
    placeItems: "center",
    height: "100vh",
    padding: "10px",
    backgroundImage: `url(${background})`,
  },
  btn: {
    alignContent: "flex-start",
  },
  table: {
    padding: "10px",
    fontSize: "2rem",
  },
}));
