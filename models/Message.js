const mongoose = require('mongoose')
const Schema = mongoose.Schema

const msgSchema = new Schema({
  userId: {
    ref: 'user',
    type: Schema.Types.ObjectId
  },
  date: {
    type: Date,
    default: Date.now
  },
  text: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model('message', msgSchema)