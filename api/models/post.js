const mongoose = require('mongoose')

const Schema = mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('post', Schema)
