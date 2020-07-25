import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/App.css';
import Movie from './Movie';
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
      <div>
        <Switch>
          <Route path='/winner/:movie' render={ (props) => (<><Winner {...props} movies={this.state.movies} reRender={this.reRender} /></>) } ></Route>
          <Route path='/loser/:movie' render={ (props) => (<><Loser {...props} movies={this.state.movies} reRender={this.reRender} /></>) } ></Route>
          <Route path='/' render={ (props) => (
            <>
              <div className="jumbotron jumbotron-fluid mh-10">
                <div className="container mh-5 d-flex flex-column align-items-center">
                  <h1 className="display-10">Which movie is worst?</h1>
                  <p className="lead">Choose the movie that has lowest rating at IMDb</p>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-around align-items-center flex-wrap h-100">
                <Movie movies={this.state.movies} i={0} o={1} />
                <Movie movies={this.state.movies} i={1} o={0} />
              </div>
            </>) } >
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
