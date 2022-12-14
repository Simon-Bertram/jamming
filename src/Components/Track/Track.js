import React from "react";
import './Track.css';

class Track extends React.Component {
  // constuctor(props) {
  //   super(props)
  // }
  renderAction() {
    if (this.props.isRemoval) {
      return <button className="Track-action">-</button>
    } else {
      return <button className="Track-action">+</button>
    }
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.songTitle}</h3>
          <p>{this.props.track.artist} | Track album</p>
        </div>
        {this.renderAction()}
      </div>
    )
  }
};

export default Track;