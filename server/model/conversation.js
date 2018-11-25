const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
  title: String,
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('conversation', ConversationSchema);
