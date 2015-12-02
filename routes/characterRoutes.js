'use strict';
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Faction = mongoose.model('Faction');
let Character = mongoose.model('Character');

router.get('/:id', (req, res, next) => {
  Character.findOne({ _id : req.params.id })
  .exec((err, result) => {
    if(err) return next(err);
    if(!result) return next('Could not find the character you requested.');
    res.send(result);
  });
});

router.post('/', (req, res, next) => {
  let character = new Character(req.body);
  character.save((err, result) => {
    if(err) return next(err);
    if(!result) return next('Could not create the character.');
    Faction.findOne({ _id: character.faction }, (err, faction) => {
      faction.characters.push(result._id);
      faction.save();
      res.send(result);
    });
  });
});

router.delete('/:id', (req, res, next) => {
  Character.remove({ _id: req.params.id }, (err, result) => {
    if(err) return next(err);
    Faction.findOneAndUpdate({ 'characters': req.params.id }, { $pull: { characters:  req.params.id }}, (err, update_result) => {
      if(err) return next(err);
      res.send(result);
    });
  });
});

router.use((err, req, res) => {
  console.log(err);
  res.status(500).send(err);
});

module.exports = router;
