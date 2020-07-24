const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: Number,
  is_active: {
    type: Boolean,
    default: true
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User