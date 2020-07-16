import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import '../styles/App.css';
import Movie from './Movie';
import BestMovieEver from './BestMovieEver';
import Winner from './Winner';
import Loser from './Loser';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }

  fetchingRandomMovie() {
    fetch('http://localhost:5000/random-movie')
    .then(res => res.json())
    .then(data => {
     !this.state.movies ? this.setState({movies:[data]}) : this.setState({movies: [...this.state.movies, data]})  
    });
  }

  componentDidMount() {
    this.fetchingRandomMovie();
    this.fetchingRandomMovie();
  }

  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#e3f2fd'}}>
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to='/' className="nav-link">Home<span className="sr-only">(current)</span></Link> 
              </li>
              <li className="nav-item">
                <Link to='/bestmovieever' className="nav-link">Best Movie Ever</Link>
              </li>
            </ul>
          </div>
        </nav>
      <div>
        <Switch>
          <Route path='/bestmovieever'>
            <BestMovieEver />
          </Route>
          <Route path='/winner/:movie' render={ (props) => (<><Winner {...props} movies={this.state.movies} i={this.state.movies[0].imdbRating}/></>) } ></Route>
          <Route path='/loser/:movie' render={ (props) => (<><Loser {...props} movies={this.state.movies} /></>) } ></Route>
          <Route path='/' render={ (props) => (<><Movie {...this.state} i={0} o={1} /><Movie {...this.state} i={1} o={0} /></>) } >
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
