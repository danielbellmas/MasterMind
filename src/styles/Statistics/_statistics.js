import { makeStyles } from "@material-ui/core/styles";
import background from "../../assets/statistics-background.jpg";

export default makeStyles(() => ({
  statistics: {
    display: "grid",
    placeItems: "center",
    height: "100vh",
    padding: "10px",
    // background: "rgba(242,200,100,0.5)",
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
