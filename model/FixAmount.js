const mongoose = require('mongoose');

const userAmountSchema = new mongoose.Schema({
  fromUser: {
    type: String,
    required : true
  },
  toUser: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('UserAmount', userAmountSchema);
