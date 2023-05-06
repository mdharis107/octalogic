const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  type: String,
  vehicles: [String],
});

const Car = mongoose.model("Car", carSchema);

module.exports = { Car }

