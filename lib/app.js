const express = require('express');
const app = express();
// const { cats } = require('./cats-data');

app.use('/cats', require('./controllers/cats'));

// app.use('/cats/:id', (req, res) => {
//   const catData = cats.find((cat) => cat.id === req.params.id);
//   res.send(catData);
// });

// app.use('/cats', (req, res) => {
//   const filteredCats = cats.map((cat) => {
//     return {
//       id: cat.id,
//       name: cat.name,
//     };
//   });
//   res.json(filteredCats);
// });

// app.use('/', (req, res) => {
//   res.send('hello world!');
// });

module.exports = app;
