const config_express = require("./config_express");
const start_express = require("./start_express");
const dbConnect = require("./dbConnect");

module.exports = async (app) => {
  await dbConnect();
  // Configure Express - Routes
  await config_express(app);
  // Start Express Application
  await start_express(app);
};
