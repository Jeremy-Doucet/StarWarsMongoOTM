"use strict";
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Faction = mongoose.model('Faction');

router.get('/', (req, res) => {
  Faction.find({}).exec((err, result) => {
    if(err) return res.status(500).send(err);
    res.send(result);
  });
});

// POST /api/v1/factions
router.post('/', (req, res) => {
  let faction = new Faction(req.body);
  faction.save((err, result) => {
    if(err) return res.status(500).send(err);
    if(!result) return res.status(500).send('Could not create the faction.');
    res.send(result);
  });
});

module.exports = router;
