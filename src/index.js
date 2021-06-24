import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ComputerProvider } from "./GameContext";

ReactDOM.render(
  <React.StrictMode>
    <ComputerProvider>
      <App />
    </ComputerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
