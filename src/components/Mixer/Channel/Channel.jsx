import React from "react";
import "../Mixer.css";

import Input from "./Input";
import InputFile from "./InputFile";
import Balance from "./Balance";
import Volume from "./Volume";
import MuteButton from "./MuteButton";
import CrossfadeButton from "./CrossfadeButton";
import RandomButton from "./RandomButton";

export default class Channel extends React.Component {
  render() {
    return (
      <div className="channel">
        <div className="channel-header">
          <Input id={this.props.id} trackTitle={this.props.trackTitle} />
        </div>
        <div className="channel-body">
          <InputFile />
          <hr className="separator" />
          <Balance />
          <Volume volumeLevel={this.props.volumeLevel} />
          <MuteButton />
          <hr className="separator" />
          <CrossfadeButton />
          <RandomButton />
        </div>
      </div>
    );
  }
}
