const logger = require(`${global.APP_ROOT}/logger`);

// Get a list of appointments
module.exports = async function (req, res, next) {
  logger.debug(`Example Creation`);

  res.send();
};
