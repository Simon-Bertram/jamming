import "./App";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../Playlist/Playlist";

function App() {
  return (
    <div>
      <h1>
        Ja<span class="highlight">mm</span>ing
      </h1>
      <h2>Heading 2</h2>
      <div class="App">
        <SearchBar />
        <div class="App-playlist">
          <SearchResults />
          <PlayList />
        </div>
      </div>
    </div>
  );
}

export default App;
