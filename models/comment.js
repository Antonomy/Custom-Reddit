const mongoose = require('mongoose')

// Make A Schema
const commentSchema = new mongoose.Schema({
  commentText: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean
})

// Make A Model From The Schema

const Comment = mongoose.model('Comment', commentSchema)

// Export The Model For Use  In The App

module.exports = Comment