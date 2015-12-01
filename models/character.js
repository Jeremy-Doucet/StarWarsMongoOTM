'use strict';
let mongoose = require('mongoose');

let CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, lowercase: true },
  race: String,
  age: Number,
  homeworld: String,
  biography: String,
  isJedi: Boolean,
  faction: { type: mongoose.Schema.Types.ObjectId, ref: 'Faction' }
});

module.exports = mongoose.model('Character', CharacterSchema);
