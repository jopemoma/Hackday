import React from 'react';
import { useHistory } from 'react-router-dom';

const Winner = props => {
  let history = useHistory();

  function handleClick() {
    history.push("/");
    window.location.reload();
  }

  if(!props.movies || props.movies.length <2 ) {
    return (
    <div className="lds-spinner">
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div><div></div>
    </div>
    );
  }

  return (
    <div className="result card text-center">
      <div className="card-body">
        <h1 className="winner card-title blink">Congrats, you guessed right!</h1>
        <p className="card-text">"{props.movies[props.match.params.movie].Title}" has a score of {props.movies[props.match.params.movie].imdbRating}</p>
        <button className="btn btn-warning"><a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${props.movies[props.match.params.movie].imdbID}/`} > Check out the movie!</a></button>
        <button className="btn btn-warning" onClick={() => {handleClick()}}>Play Again!</button>
      </div>
    </div>
  )
}

export default Winner;