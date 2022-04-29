import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [getData, setGetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function fetchMovieHandler(){
    setIsLoading(true)
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const todosArray = await response.json()
    if(todosArray.length>0){
      setGetData(todosArray)
      setIsLoading(false)
    }
    //return todosArray
  }
  //fetchMovieHandler().then(data=> setGetData(data))
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <MoviesList movies={getData} />}
      </section>
    </React.Fragment>
  );
}

export default App;
