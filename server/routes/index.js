'use strict';

const indexRouter = require('express').Router();
const { Slide } = require('../models');

indexRouter.get('/slides', (req, res, next) => {
  Slide.findAll()
    .then(slides => {
      res.status(200).json({ slides });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = indexRouter;
