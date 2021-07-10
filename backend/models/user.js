const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThirdPartyProviderSchema = new Schema({
  provider_name: {
    type: String,
    default: null,
  },
  provider_id: {
    type: String,
    default: null,
  },
  provider_data: {
    type: {},
    default: null,
  },
});

const userSchema = new Schema(
  {
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
    emailIsVerified: {
      type: Boolean,
      default: false,
    },
    memberSince: {
      type: Date,
      default: Date.now,
    },
    thirdPartyAuth: [ThirdPartyProviderSchema],
  },
  { strict: false },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
