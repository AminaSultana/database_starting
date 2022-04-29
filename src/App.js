import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [getData, setGetData] = useState([]);
  async function fetchMovieHandler(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const todosArray = await response.json()
    setGetData(todosArray)
    //return todosArray
  }
  //fetchMovieHandler().then(data=> setGetData(data))
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={getData} />
      </section>
    </React.Fragment>
  );
}

export default App;
