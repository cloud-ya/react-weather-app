import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Zurich" />
        <footer>
          Coded with 🤍 by{" "}
          <a href="https://cozy-manatee-c79f41.netlify.app/">Claudia Hügi</a>{" "}
          {""}
          using the{" "}
          <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
            SheCodes
          </a>{" "}
          Weather API and open sourced on{" "}
          <a
            href="https://github.com/cloud-ya/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
