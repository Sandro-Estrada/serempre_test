const Schema = require("validate");

const points = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
});

module.exports = points;
