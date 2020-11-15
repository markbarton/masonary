const { env: { CUSTOM_MONGO_DB, NODE_ENV, CUSTOM_MONGO_DEBUG } = {} } = process;
const mongoose = require("mongoose");
const logger = require(`${global.APP_ROOT}/logger`);

module.exports = async () => {
  // Single Database connection example
  await mongoose.connect(CUSTOM_MONGO_DB, {
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  CUSTOM_MONGO_DEBUG === "true" && mongoose.set("debug", true);

  logger.info(`${process.env.CUSTOM_MONGO_DB} Connected`);

  return;
};
