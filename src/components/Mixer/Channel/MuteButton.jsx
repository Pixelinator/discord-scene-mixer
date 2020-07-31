import React from "react";
import "../Mixer.css";

export default class MuteButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <span className="buttonlabel">Mute</span>
        <div className="buttonconsole mute_control">
          <div className="button-indicator" />
          <button />
        </div>
      </React.Fragment>
    );
  }
}
