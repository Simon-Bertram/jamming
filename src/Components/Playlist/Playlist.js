import React from "react";
import './Playlist.css';

class PlayList extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        {/* <TrackList /> */}
        <button class="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    )
  }
}

export default PlayList;