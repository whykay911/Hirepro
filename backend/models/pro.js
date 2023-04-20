const mongoose = require("mongoose");

const proSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profession: { type: String, required: true },
  hourly: { type: String, required: true },
});

module.exports = mongoose.model("pro", proSchema);
