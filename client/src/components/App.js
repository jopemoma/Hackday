import React from 'react';
import '../styles/App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }
  componentDidMount() {
    fetch('http://localhost:5000/random-movie')
    .then(res => res.json())
    .then(data => this.setState(data));
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <img src={this.state.Poster} />
        <p>{this.state.Title}</p>
      </div>
    );
  }
}

export default App;
