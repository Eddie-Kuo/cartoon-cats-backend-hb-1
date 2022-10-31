const express = require('express');
const { cats } = require('./cats-data');

const app = express();

app.use('/cats', (req, res) => {
  const filteredCats = cats.map((cat) => {
    return {
      id: cat.id,
      name: cat.name,
    };
  });
  res.json(filteredCats);
});

app.use('/', (req, res) => {
  res.send('hello world!');
});

module.exports = app;
