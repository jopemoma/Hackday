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
      <div className="BestMovieEver">
      <img alt={this.state.movie.Title} src={this.state.movie.Poster} />
      <img alt="Best actor ever" src="../images/jarjar.jpeg" />
      <p>{this.state.movie.Title}</p>
      <p>{this.state.movie.Year}</p>
      <button onClick={() => {window.location.reload()}}><Link to='/' >Back to the game</Link> </button>
    </div>
    )
  }
}


export default BestMovieEver;