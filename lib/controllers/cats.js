const { Router } = require('express');
const { cats } = require('../cats-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    const catData = cats.find((cat) => cat.id === req.params.id);
    return res.json(catData);
  })
  .get('/', (req, res) => {
    const filteredCats = cats.map((cat) => {
      return {
        id: cat.id,
        name: cat.name,
      };
    });
    res.json(filteredCats);
  });
