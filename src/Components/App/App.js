import "./App";
import "./App.css";
import "../SearchBar/SearchBar";

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
          
        </div>
      </div>
    </div>
  );
}

export default App;
