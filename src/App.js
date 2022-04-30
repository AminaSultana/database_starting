import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [getData, setGetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [btn, setBtn]=useState(false);

  const fetchUser= useCallback(async()=> {
    try {
      console.log("function called");
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.ok) {
        setError(null);
        const users = await response.json();
        if (users.length > 0) {
          setGetData(users);
        }
      } else {
      }
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }, [])

  console.log("App");
  useEffect(() => {
    return fetchUser();
  }, [fetchUser]);

  let content = <p>Loading...</p>;
  if (!isLoading && { error }) {
    content = <p>Something went wrong</p>;
  }
  if (!isLoading && getData.length > 0) {
    content = <MoviesList users={getData} />;
  }
const func = ()=>{
  setBtn(prev=>!prev)
}
  return (
    <React.Fragment>
      <section>
        <button onClick={func}>Fetch Users</button>
        <button>Cancel</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
