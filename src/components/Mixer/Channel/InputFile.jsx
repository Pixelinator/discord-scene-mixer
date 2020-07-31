import React from "react";
import "../Mixer.css";

export default class InputFile extends React.Component {
  render() {
    return (
      <div
        className="buttonconsole inputfile-control"
        style={{ marginTop: "0.125em" }}
      >
        <button style={{ height: "1.75em" }}>Load</button>
      </div>
    );
  }
}
