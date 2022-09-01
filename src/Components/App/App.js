import React from "react";
import "./App";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [{songTitle: 'Tiny Dancer', artist: 'Elton John', album: 'Madman', id: 1},
        {songTitle: 'Lion King', artist: 'Elton Johns Brother', album: 'Madman2', id: 2}
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span class="highlight">mm</span>ing
        </h1>
        <h2>Heading 2</h2>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
