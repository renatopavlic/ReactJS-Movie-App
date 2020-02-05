import React, {useState} from 'react'          //import build-in f useState for storing data into search (1)
import Search from "./components/Search"

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=1247a431";

  const handleInput = (e) => {
    let s = e.target.value;              // value of each letter typed in search input (2)

    setState(prevState => {
      return {...prevState, s: s}
    })
  };

    console.log(state.s);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Reno Movie DataBase</h1>
      </header>
      <main>
        <Search handleInput={handleInput} />
      </main>
    </div>
  );
}

export default App;
