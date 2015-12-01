'use strict';
let mongoose = require('mongoose');

let FactionSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, lowercase: true },
  logoUrl: { type: String, required: true },
  diplomacy: { type: String, enum: ['Good', 'Neutral', 'Evil']},
  biography: String,
  homeworld: String,
  characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }]
});

module.exports = mongoose.model('Faction', FactionSchema);
