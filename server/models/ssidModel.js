const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ssidSchema = new Schema({
  sessionId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 60, default: Date.now }
})

module.exports = mongoose.model('Session', ssidSchema);