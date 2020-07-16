import React from 'react';
import { Link } from 'react-router-dom';

class BestMovieEver extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }
  fetchingBestMovie() {
    fetch('http://localhost:5000/best-movie-ever')
    .then(res => res.json())
    .then(data => this.setState({movie: data}))  
  }

  componentDidMount() {
    this.fetchingBestMovie();
  }
  render() {
    if(!this.state.movie) {
      return (
      <div className="lds-spinner">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div>
      </div>);
    }
    return (
      <div className="card best-movie" style={{"width": "18rem"}}>
        <img className="card-img-top" alt="Best actor ever" src="../images/jarjar.jpeg"/>
        <div className="card-body d-flex flex-column align-items-center flex-wrap">
          <h5 className="card-title">{this.state.movie.Title}</h5>
          <p className="card-text">{this.state.movie.Year}</p>
          <button className="btn btn-warning" onClick={() => {window.location.reload()}}><Link to='/' >Back to the game</Link> </button>
        </div>
      </div>
    )
  }
}


export default BestMovieEver;