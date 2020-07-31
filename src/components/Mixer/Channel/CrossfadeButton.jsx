import React from "react";
import "../Mixer.css";

export default class CrossfadeButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <span className="buttonlabel">Crossfade</span>
        <div className="buttonconsole crossfade_control">
          <div className="button-indicator" />
          <button />
        </div>
      </React.Fragment>
    );
  }
}
