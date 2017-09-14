const router = require('express').Router();

const tvShows = [
  {
    id: 1,
    title: 'Big Bang Theory',
    genre: 'Sitcome',
    rating: '14',
    keywords: ['comedy', 'science'],
    review: 'A'
  },
  {
    id: 2,
    title: 'The Walking Dead',
    genre: 'Drama',
    rating: 'MA',
    keywords: ['zombies', 'apocalypse', 'horror'],
    review: 'A'
  },
  {
    id: 3,
    title: 'Fixer Upper',
    genre: 'Reality TV',
    rating: 'PG',
    keywords: ['home improvement', 'remodel', 'house'],
    review: 'A'
  }
];

router.get('/', (request, response) => {
  const tvShowsArray = (request.query.sort === 'genre') ? sortByGenre(tvShows) : tvShows;
  response.status(200).json(tvShowsArray);
});

router.get('/', (request, response) => {
  response.status(200).json(tvShows);
});

router.get('/:id', (request, response) => {
  let tvShow;
  for(let i = 0; i < tvShows.length; i++) {
    if (request.params.id.toString() === tvShows[i].id.toString()) {
      tvShow = tvShows[i];
    }
  }

  response.status(200).json(tvShow);
});

router.post('/', (request, response) => {
  const tvShowId = request.body.id;
  tvShows.push(request.body);
  const tvShow = getTvShow(tvShows, tvShowId);
  response.status(200).json(tvShow);
});

router.put('/:id', (request, response) => {
  const tvShow = updateTvShow(tvShows, request.body, request.params.id);
  response.status(200).json(tvShow);
});

function getTvShow (array, id) {
  let tvShow;
  for (let i = 0; i < array.length; i++) {
    if (id.toString() === array[i].id.toString()) {
      tvShow = array[i];
    }
  }
  return tvShow;
}

function updateTvShow (array, newTvShow, id) {
  let tvShow;
  for (let i = 0; i < array.length; i++) {
    if (id.toString() === array[i].id.toString()) {
      array[i].title = newTvShow.title;
      array[i].genre = newTvShow.genre;
      array[i].rating = newTvShow.rating;
      array[i].keywords = newTvShow.keywords;
      array[i].review = newTvShow.review;

      tvShow = array[i];
    }
  }
  return tvShow;
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
