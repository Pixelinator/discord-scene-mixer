import React from "react";
import "../Mixer.css";

export default class RandomButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <span className="buttonlabel">Random</span>
        <div className="buttonconsole random_control">
          <div className="button-indicator" />
          <button />
        </div>
        <div className="randomsettings_control">
          <span>5x /10m</span>
        </div>
      </React.Fragment>
    );
  }
}
