import React from "react";
import Channel from "./Channel/Channel";
import "./Mixer.css";

export default class Mixer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: [
        {
          id: 1,
          trackTitle: "Track 01",
          volumeLevel: "20",
        },
        {
          id: 2,
          trackTitle: "Track 02",
          volumeLevel: "30",
        },
        {
          id: 3,
          trackTitle: "Track 03",
          volumeLevel: "40",
        },
        {
          id: 4,
          trackTitle: "Track 04",
          volumeLevel: "50",
        },
        {
          id: 5,
          trackTitle: "Track 05",
          volumeLevel: "60",
        },
        {
          id: 6,
          trackTitle: "Track 06",
          volumeLevel: "70",
        },
        {
          id: 7,
          trackTitle: "Track 07",
          volumeLevel: "80",
        },
        {
          id: 8,
          trackTitle: "Track 08",
          volumeLevel: "90",
        },
      ],
    };
  }

  render() {
    const { channels } = this.state;
    return (
      <div id="complete-mixer-box">
        <div id="mixer-gui-box">
          <div id="html5-player">
            <div id="channels">
              <div id="channels-left-border">
                <div />
              </div>
              {channels.map((channel) => (
                <Channel
                  key={channel.id}
                  id={channel.id}
                  trackTitle={channel.trackTitle}
                  volumeLevel={channel.volumeLevel}
                />
              ))}
              <div id="masterchannel" className="masterchannel">
                <div className="masterchannel-bg">
                  <div className="masterchannel-bg-inner">
                    <div className="volume mastervolume">
                      <div
                        className="volume_bg"
                        style={{ left: "21px !important" }}
                      >
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
                      <div
                        className="slider mastercontrol_volume ui-slider ui-slider-vertical ui-widget ui-widget-content ui-corner-all"
                        style={{ marginTop: "1.5em" }}
                      >
                        <span
                          className="ui-slider-handle ui-state-default ui-corner-all"
                          tabIndex={0}
                          style={{ bottom: "100%" }}
                        />
                      </div>
                    </div>
                    <div
                      className="buttonconsole"
                      style={{
                        marginTop: "0.5em",
                        width: "2.75em",
                        height: "2.5em",
                      }}
                    >
                      <button
                        className="mastercontrol_mute active"
                        style={{ height: "100%" }}
                      />
                    </div>
                    <div
                      className="buttonconsole mixer-minimize-control"
                      style={{
                        marginTop: "1.125em",
                        width: "55px",
                        lineHeight: "normal",
                      }}
                    >
                      <button style={{ height: "38px" }}>Load Preset</button>
                    </div>
                  </div>
                  <div
                    className="buttonconsole mixer-save-control"
                    style={{
                      position: "relative",
                      top: "-0.75em",
                      width: "55px",
                      lineHeight: "normal",
                    }}
                  >
                    <button style={{ height: "38px" }}>Stream Output</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
