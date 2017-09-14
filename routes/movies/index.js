const router = require('express').Router();

const movies = [
  {
    id: 1,
    title: 'I am Legend',
    genre: 'Sci-Fi',
    rating: 'PG-13',
    keywords: ['vampires', 'apocalypse'],
    review: 'A'
  },
  {
    id: 2,
    title: 'Finding Nemo',
    genre: 'Animated',
    rating: 'G',
    keywords: ['Disney', 'ocean', 'family'],
    review: 'B'
  },
  {
    id: 3,
    title: 'Paycheck',
    genre: 'Sci-Fi',
    rating: 'PG-13',
    keywords: ['future', 'reverse engineering', 'time machine'],
    review: 'A'
  }
];

router.get('/', (request, response) => {
  const movieArray = (request.query.sort === 'genre') ? sortByGenre(movies) : movies;
  response.status(200).json(movieArray);
});

router.get('/', (request, response) => {
  response.status(200).json(movies);
});

router.get('/:id', (request, response) => {
  let movie;
  for(let i = 0; i < movies.length; i++) {
    if (request.params.id.toString() === movies[i].id.toString()) {
      movie = movies[i];
    }
  }

  response.status(200).json(movie);
});

router.post('/', (request, response) => {
  const movieId = request.body.id;
  movies.push(request.body);
  const movie = getMovie(movies, movieId);
  response.status(200).json(movie);
});

router.put('/:id', (request, response) => {
  const movie = updateMovie(movies, request.body, request.params.id);
  response.status(200).json(movie);
});

function getMovie (array, id) {
  let movie;
  for (let i = 0; i < array.length; i++) {
    if (id.toString() === array[i].id.toString()) {
      movie = array[i];
    }
  }
  return movie;
}

function updateMovie (array, newMovie, id) {
  let movie;
  for (let i = 0; i < array.length; i++) {
    if (id.toString() === array[i].id.toString()) {
      array[i].title = newMovie.title;
      array[i].genre = newMovie.genre;
      array[i].rating = newMovie.rating;
      array[i].keywords = newMovie.keywords;
      array[i].review = newMovie.review;

      movie = array[i];
    }
  }
  return movie;
}

function sortByGenre (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray.sort((a, b) => {
    if (a.genre.toUpperCase() < b.genre.toUpperCase()) {
      return -1;
    }
    if (a.genre.toUpperCase() > b.genre.toUpperCase()) {
      return 1;
    }
    return 0;
  });
}

module.exports = router;
