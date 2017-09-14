const router = require('express').Router();

const movies = require('./movies');
const tvshows = require('./tvshows');

router.get('/', (request, response) => {
  response.status(200).send('Welcome to Your Movie Log');
});

router.use('/movies', movies);
router.use('/tvshows', tvshows);

module.exports = router;
