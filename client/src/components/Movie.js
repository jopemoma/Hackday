import React from 'react';
import { Link } from 'react-router-dom';


const Movie = props => {
    if(!props.movies || props.movies.length <2 ) {
      return (
      <div className="lds-spinner">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div>
      </div>
      );
    }
    return (
        <Link to={props.movies[props.i].imdbRating >= props.movies[props.o].imdbRating ? `/winner/${props.i}` : `/loser/${props.i}`}> 
      <div className="card mh-30" style={{"width": "18rem"}}>
        <img className="card-img-top" src={props.movies[props.i].Poster} alt={props.movies[props.i].Title} />
        <div className="card-body d-flex flex-column align-items-center flex-wrap">
          <h5 className="card-title">{props.movies[props.i].Title}</h5>
          <p className="card-text">{props.movies[props.i].Year}</p>
        </div>
      </div>
      </Link>
    );
}

export default Movie;