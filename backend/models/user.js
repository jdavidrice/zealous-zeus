const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  role: {
    type: String,
    enum: ['ADMIN', 'USER'],
    default: 'USER',
    required: true,
  },
  username: {
    type: String,
    trim: true,
    required: true,
    index: { unique: true },
  },
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  memberSince: {
    type: Date,
    default: Date.now,
  },
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
