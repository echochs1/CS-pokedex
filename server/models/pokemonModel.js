const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: { type: String, required: true },
  level: { type: Number, required: true, default: 100 },
  gender: { type: String },
  ability: { type: String, required: true },
  item: { type: String },
  moves: [String]
})

module.exports = mongoose.model('Pokemon', pokemonSchema)