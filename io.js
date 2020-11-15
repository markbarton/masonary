const sio = require("socket.io");
const logger = require("./logger");

let socket_instance = null;
// Only holds users with a logname
const users = new Map();
// Holds all connected sockets - for stats
const ids = new Map();

exports.socket_instance = function () {
  return socket_instance;
};

exports.initialize = function (server) {
  socket_instance = sio(server);

  socket_instance.on("connection", (socket) => {
    logger.debug(`A user connected with ${socket.id}`);

    // Map ID
    ids.set(socket.id, {});

    // Handle User Disconnect
    socket.on("disconnect", function () {
      // Try and get Info about disconnected user
      const user_data = ids.get(socket.id);
      if (user_data) {
        logger.debug("USER DISCONNECTED " + user_data.server_name);
        // remove from User Socket - if there is only 1 socket then remove that User as well
        const user = users.get(user_data.server_name);
        if (user) {
          users.delete(user_data.server_name);
        }
        // Remove Socket ID from Map
        ids.delete(socket.id);
        // Lets broadcast this server is connected so we can display its online
      } else {
        logger.debug("User Disconnected but was not Mapped!");
      }
    });

    // EXAMPLE CALL from client - passing detail about who is connected
    socket.on("UPDATE_USER", function (data) {
      logger.debug(`UPDATE_USER triggered for ${data.server_name}`);
      logger.info(
        colors.yellow.inverse(
          `*** ${data.server_name} Server connected and ready for action ***`
        )
      );
      data.connection_time = new Date();

      // Map Socket ID with a User
      users.set(data.server_name, {
        socket: socket.id,
        ...data,
      });

      // IDs map just used for overall socket count - not sure if this is a waste.
      ids.set(socket.id, data);
    });
  });
};

// return all users
exports.users = function () {
  return users;
};

// return all ids
exports.ids = function () {
  return ids;
};
