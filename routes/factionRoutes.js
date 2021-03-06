"use strict";
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Faction = mongoose.model('Faction');
let Character = mongoose.model('Character');

// GET /api/v1/factions
router.get('/', (req, res, next) => {
  Faction.find({}).exec((err, result) => {
    if(err) return next(err);
    res.send(result);
  });
});

// GET /api/v1/factions/:id
router.get('/:id', (req, res, next) => {
  Faction.findOne({ _id : req.params.id })
  .populate('characters', 'name race homeworld')
  .exec((err, result) => {
    if(err) return next(err);
    if(!result) return next('Could not find the faction you requested.');
    res.send(result);
  });
});

// POST /api/v1/factions
router.post('/', (req, res, next) => {
  let faction = new Faction(req.body);
  faction.save((err, result) => {
    if(err) return next(err);
    if(!result) return next('Could not create the faction.');
    res.send(result);
  });
});

router.delete('/:id', (req, res, next) => {
  Faction.remove({ _id: req.params.id}, (err, result) => {
    if(err) return next(err);
    Character.remove({ faction: req.params.id }, (err, char_result) => {
      if(err) return next(err);
      res.send(result);
    });
  });
});

// error handling for the next(err) call
router.use((err, req, res) => {
  console.log(err);
  res.status(500).send(err);
});

module.exports = router;
