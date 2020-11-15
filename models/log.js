const mongoose = require("mongoose");

const Log = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now,
  },
  consultant: {
    httpSessionLogname: { type: String },
    httpSessionName: { type: String },
    httpSessionStaffNo: { type: String },
    httpSessionTravelCentre: { type: String },
  },
  slot_reference: {
    type: String,
  },
  log: {
    type: String,
  },
});

module.exports = mongoose.model("Log", Log);
