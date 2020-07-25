const mongoose = require('mongoose')

const catSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  breed: String,
  age: Number,
  is_active: {
    type: Boolean,
    default: true
  }
}, {timestamps: true})

const Cat = mongoose.model('Cat', catSchema)

module.exports = Cat