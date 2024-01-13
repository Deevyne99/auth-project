const mongoose = require('mongoose')
const bycrpt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, 'please provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'please provide password'],
    minlength: 6,
  },

  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
})

userSchema.pre('save', async function () {
  const salt = await bycrpt.genSalt(10)
  this.password = await bycrpt.hash(this.password, salt)
})

module.exports = mongoose.model('user', userSchema)
