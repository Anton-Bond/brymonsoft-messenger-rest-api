const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('user', userSchema)