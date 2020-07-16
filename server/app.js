const express = require('express')
const app = express()
const fetch = require('node-fetch');
const cors = require('cors')

const port = 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.get('/random-movie', (req, res) => {
  const baseUrl = 'https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false';
  const apiKey = '&api_key=a4e49dd08b747a35c0862c17c3ce6dc5';
  const pageNumber=`&page=${Math.floor(Math.random()*500)}`;
  
  const randomPage = (url, key, page) => {
      const randomUrl = url + key + page;
      return randomUrl;
  };	
  
  const apiUrl = randomPage(baseUrl, apiKey, pageNumber);
  
  fetch(apiUrl)
  .then(res => res.json())
  .then(movies => movies.results[Math.floor(Math.random()*(movies.results.length-1))])
  .then(movie => {
    fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=a4e49dd08b747a35c0862c17c3ce6dc5&language=en-US`)
    .then(res => res.json())
    .then(movie => movie.imdb_id)
    .then(id => {
      fetch(`http://www.omdbapi.com/?i=${id}&apikey=fc59ed8f`)
      .then(res => res.json())
      .then(movie => res.send(movie));
    })
  }) 
  .catch(err => {
      console.error(err);
  });
});

app.get('/best-movie-ever', (req,res) => {
  fetch('http://www.omdbapi.com/?i=tt0120915&apikey=fc59ed8f')
  .then(res => res.json())
  .then(movie => res.send(movie));
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));