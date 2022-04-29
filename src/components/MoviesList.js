import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((user) => (
        <Movie
          key={user.id}
          name={user.name}
          email={user.email}
        />
      ))}
    </ul>
  );
};

export default MovieList;
