import React, {useState} from 'react'          //import build-in f useState for storing data into search (1)

import axios from "axios"

import Search from "./components/Search"

import Results from "./components/Results"

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=1247a431";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return {...prevState, results: results}
        })
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;              // handleInput f is value of each letter typed in search input 

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
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
