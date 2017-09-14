const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.status(200).send('Testing routes');
});

app.get('/movies', (request, response) => {
  response.status(200).send('Movie log');
});

app.get('/tvshows', (request, response) => {
  response.status(200).send('TV Show log');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = app;
