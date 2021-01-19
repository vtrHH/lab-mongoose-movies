// GET request for Celebreties (Iteration 2)

const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities: celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/celebrities/:id', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity: celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/celebrities/create', (req, res, next) => {
  res.render('celebrities/create');
});

router.post('/celebrities', (req, res, next) => {
  const data = req.body;
  Celebrity.create({
    name: data.title,
    occupation: data.occupation,
    catchPhrase: data.catchPhrase
  }).then();
  /// HERE I STOPPED FOR TODAY!
});

module.exports = router;
