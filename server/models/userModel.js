const mongoose = require('mongoose');
const Pokemon = require('./pokemonModel');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  party: {},
  box: {}
})

module.exports = mongoose.model('User', userSchema);