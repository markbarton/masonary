const { env: { CUSTOM_PORT } = {} } = process;

const logger = require(`${global.APP_ROOT}/logger`);
const pjson = require(`${global.APP_ROOT}/package.json`);
const listEndpoints = require('express-list-endpoints');

module.exports = async (app) => {
  // Attempt to start Express
  try {
    const http = require('http').Server(app);

    /** OPTIONAL SOCKET.IO */
    const io = require(`${global.APP_ROOT}/io`);
    io.initialize(http);
    /** REMOVE SOCKET.IO IF NOT USED */

    await http.listen(CUSTOM_PORT);
  } catch (e) {
    logger.error(`Unable to create app: ${e}`);
    process.exit(1);
  }

  // Output Custom Variables + NOde-enV
  let constants_output = '';
  for (var key of Object.keys(process.env)) {
    if (key.substring(0, 6) === 'CUSTOM') {
      constants_output += `
>> ${key.substring(7)} : ${process.env[key]}`;
    }
    if (key === 'NODE_ENV') {
      constants_output += `
>> ${key} : ${process.env[key]}`;
    }
  }
  let routes_output = '';
  for (var obj of listEndpoints(app)) {
    routes_output += `
    http://localhost:${process.env.CUSTOM_PORT}${obj.path}  [${obj.methods.join(
      ' '
    )}]`;
  }
  logger.info(
    `${pjson.name} Started with the following environment variables ${constants_output}`
  );
  logger.info(
    `${pjson.name} Started with the following routes ${routes_output}`
  );

  return app;
};
