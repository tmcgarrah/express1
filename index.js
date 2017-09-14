const express = require('express');
const app = express();

const routes = require('./routes');

// app.get('/', (request, response) => {
//   response.send('Hola');
// });

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
