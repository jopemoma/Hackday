import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

const Winner = props => {
  console.log(props.properties);
  return (
    <div>
      Congrats you won!
      <p>{props.movies[props.match.params.movie].Title} had a scored of {props.movies[props.match.params.movie].imdbRating}</p>
      <a href={`https://www.imdb.com/title/${props.movies[props.match.params.movie].imdbID}/`}> Check out the movie!</a>
      <Link to='/' >Play Again!</Link> 
    </div>
  )
}

export default Winner;