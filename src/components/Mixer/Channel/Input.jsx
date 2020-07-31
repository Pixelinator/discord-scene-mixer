import React from "react";
import "../Mixer.css";

export default class Input extends React.Component {
  render() {
    return (
      <React.Fragment>
        <span className="channel-number">CH {this.props.id}</span>
        <div className="inputfile">
          <span className="inputfile-name">{this.props.trackTitle}</span>
        </div>
      </React.Fragment>
    );
  }
}
