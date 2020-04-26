import React, { Component } from 'react'
export default class Videos extends Component {
    render() {
        return (
            <div className="videos">
                <div className="video">
                    <div className="video-cell">
                        <iframe height="360" width="480" title="antvsbees" src="https://www.youtube.com/embed/FCaWv7VLnS4"></iframe>
                    </div>
                    <div className="video-description">
                        <h4>Video of Playing Ants VS. Bees</h4>
                    </div>
                </div>
            </div>
        )
    }
}
