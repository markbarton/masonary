const logger = require(`${global.APP_ROOT}/logger`);

// This is used to update slot with customer info from tf.com
module.exports = async function (req, res, next) {
  logger.debug(`Example Get Public Data`);

  res.send();
};
