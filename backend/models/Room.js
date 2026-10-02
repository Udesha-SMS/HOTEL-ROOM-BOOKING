const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["single", "double", "dormitory"],
  },
  capacity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    default: [],
  },
  images: {
    type: [String],
    default: [],
  },
  available: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Room", roomSchema);
