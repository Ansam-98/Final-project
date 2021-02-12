const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("Form", FormSchema);