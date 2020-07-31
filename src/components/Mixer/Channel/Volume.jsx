import React from "react";
import "../Mixer.css";

export default class Volume extends React.Component {
  render() {
    return (
      <div className="volume">
        <div className="volume_bg">
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
        <div className="slider volume_control ui-slider ui-slider-vertical ui-widget ui-widget-content ui-corner-all">
          <span
            className="ui-slider-handle ui-state-default ui-corner-all"
            tabIndex={0}
            style={{ bottom: this.props.volumeLevel + "%" }}
          />
        </div>
      </div>
    );
  }
}
