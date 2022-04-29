import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </li>
  );
};

export default Movie;
