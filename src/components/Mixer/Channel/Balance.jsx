import React from "react";
import "../Mixer.css";

export default class Balance extends React.Component {
  render() {
    return (
      <div className="balance">
        <div className="balance-mark" />
        <div className="balance_control-bg">
          <div
            className="panningbutton button_knob balance_control active"
            style={{ transform: "rotate(0deg)" }}
          >
            <div />
          </div>
        </div>
        <span className="balance-label balance-label-left">L</span>
        <span className="balance-label balance-label-right">R</span>
        <div className="balance-mark2" />
        <div className="balance-mark3" />
      </div>
    );
  }
}
