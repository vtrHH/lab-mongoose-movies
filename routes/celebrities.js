// GET request for Celebreties (Iteration 2)

const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/celebrities/create', (req, res, next) => {
  res.render('celebrities/create');
});

router.get('/celebrities/:id', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebrity) => {
      res.render('celebrities/show', { celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/celebrities', (req, res, next) => {
  const data = req.body;
  const celebrity = new Celebrity({
    name: data.name,
    occupation: data.occupation,
    catchPhrase: data.catchPhrase
  });
  celebrity
    .save()
    .then((celebrity) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/celebrities/:id/delete', (req, res, next) => {
  const id = req.params.id;
  Celebrity.findByIdAndRemove(id)
    .then(() => res.redirect('/celebrities'))
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
