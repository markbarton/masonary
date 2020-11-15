const logger = require(`${global.APP_ROOT}/logger`);
const log = require(`${global.APP_ROOT}/models/log`);

module.exports = async function (content, staff = {}, slot) {
  logger.debug(`Saving Log`);
  let data = {};
  data.log = content;
  data.consultant = { ...staff };
  data.slot_reference = slot._id;

  let log_record = new log(data);
  await log_record.save();

  slot.audit.push(log_record._id);
  return slot;
};
