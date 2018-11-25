const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  'email': String,
  'username': String,
  'password': String,
  'created': Date
})

module.exports = mongoose.model('user', UserSchema);
