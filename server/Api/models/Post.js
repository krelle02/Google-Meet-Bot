const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  actions: {
    type: Object,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
