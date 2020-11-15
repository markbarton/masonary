/**
 * Standard Deploy controller - used to extract what this application is runnning after deployment
 */
const package_json = require(`${global.APP_ROOT}/package.json`);
const logger = require(`${global.APP_ROOT}/logger`);

module.exports = function (req, res, next) {
  logger.debug(`Deployment Information Called`);
  const report = {};
  report.package_json = package_json;
  report.custom_env = collect_env();
  report.NODE_ENV = process.env.NODE_ENV;
  report.env = process.env;

  res.send(report);
};

function collect_env() {
  let constants_output = "";
  for (var key of Object.keys(process.env)) {
    if (key.substring(0, 6) === "CUSTOM") {
      constants_output += `
  >> ${key.substring(7)} : ${process.env[key]}`;
    }
    if (key === "NODE_ENV") {
      constants_output += `
  >> ${key} : ${process.env[key]}`;
    }
  }
  return constants_output;
}
