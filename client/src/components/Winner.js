import React from 'react';
import { Link } from 'react-router-dom';

const Winner = props => {
  return (
    <div>
      Congrats you won!
      <p>{props.movies[props.match.params.movie].Title} has a scored of {props.movies[props.match.params.movie].imdbRating}</p>
      <button><a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${props.movies[props.match.params.movie].imdbID}/`} > Check out the movie!</a></button>
      <button onClick={() => {window.location.reload()}}><Link to='/' >Play Again!</Link> </button>
    </div>
  )
}

export default Winner;