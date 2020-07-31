const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

require('dotenv').config();

const moviedbKey = process.env.MOVIEDBKEY;
const omdbKey = process.env.OMDBKEY;
const port = 5000;

app.use(cors());

app.get('/random-movie', async (req, res) => {
  try {
    const baseUrl = 'https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&api_key=';
    const pageNumber = `&page=${Math.floor(Math.random() * 500)}`;
    const apiUrl = baseUrl + moviedbKey + pageNumber;
    const randomMList = (await (await fetch(apiUrl)).json()).results;
    const randomMovie = randomMList[Math.floor(Math.random() * (randomMList.length - 1))];
    const randomMovieId = await (await fetch(`https://api.themoviedb.org/3/movie/${randomMovie.id}?api_key=${moviedbKey}&language=en-US`)).json();
    const randomIMDBMovie = await (await fetch(`http://www.omdbapi.com/?i=${randomMovieId.imdb_id}&apikey=${omdbKey}`)).json();
    res.send(randomIMDBMovie);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
