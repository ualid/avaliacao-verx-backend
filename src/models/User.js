const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mail: { type: String, required: true },
  dueDate: { type: Date, required: true },
  paided: { type: Boolean },
  value: { type: Number, required: true },
});

module.exports = mongoose.model("User", UserSchema);
