import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';


const Movie = props => {
    console.log(props);
    if(!props.movies || props.movies.length <2 ) {
      return (
      <div className="lds-spinner">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div>
      </div>);
    }
    return (

      <div className="Movie">
      <img src={props.movies[props.i].Poster} />
      <p>{props.movies[props.i].Title}</p>
      <p>{props.movies[props.i].Year}</p>
    <button><Link to={props.movies[props.i].imdbRating >= props.movies[props.o].imdbRating ? `/winner/${props.i}` : `/loser/${props.i}`}> Vote for {props.movies[props.i].Title}! </Link>}</button>
    </div>

    )
}

export default Movie;