const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: { type: String, required: true },
  level: { type: Number, required: true, default: 100 },
  gender: { type: String },
  ability: { type: String, required: true },
  nature: { type: String },
  item: { type: String },
  // moves: [String]
})

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  party: [pokemonSchema],
  box: [pokemonSchema]
})

module.exports = mongoose.model('User', userSchema);