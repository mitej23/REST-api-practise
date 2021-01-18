const mongoose = require("mongoose");

const fundSchema = new mongoose.Schema({
  fundName: {
    type: String,
    required: true,
  },
  amtInvested: {
    type: Number,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Fund", fundSchema);
