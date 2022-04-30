import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  console.log("Movielist");
  return (
    <ul className={classes['movies-list']}>
      {props.users.map((user) => (
        <Movie
          key={user.id}
          name={user.name}
          email={user.email}
        />
      ))}
    </ul>
  );
};

export default React.memo(MovieList);
