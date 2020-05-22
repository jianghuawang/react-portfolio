import React, { Component } from "react";
import YouTube from "react-youtube";
export default class Videos extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div className="videos">
        <div className="video">
          <div className="video-cell">
            <YouTube className="youtube" videoId="FCaWv7VLnS4" opts={opts} />
          </div>
          <div className="video-description">
            <p>
              <strong>Video of Playing Ants VS. Bees</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
