import React from 'react';
import { Link } from 'react-router-dom';

const Winner = props => {
  return (
    <div className="result card text-center">
      <div className="card-body">
        <h1 className="winner card-title blink">Congrats, you guessed right!</h1>
        <p className="card-text">"{props.movies[props.match.params.movie].Title}" has a score of {props.movies[props.match.params.movie].imdbRating}</p>
        <button className="btn btn-warning"><a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${props.movies[props.match.params.movie].imdbID}/`} > Check out the movie!</a></button>
        <button className="btn btn-warning" onClick={() => {window.location.reload()}}><Link to='/' >Play Again!</Link> </button>
      </div>
    </div>
  )
}

export default Winner;