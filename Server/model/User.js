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
  verificationToken: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  verified: Date,
})

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return
  const salt = await bycrpt.genSalt(10)
  this.password = await bycrpt.hash(this.password, salt)
})

userSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bycrpt.compare(candidatePassword, this.password)
  return isMatch
}

module.exports = mongoose.model('user', userSchema)
