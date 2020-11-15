const bodyParser = require("body-parser");
const cors = require("cors");

// Routes
const route1 = require(`${global.APP_ROOT}/routes/route1`);
const route2 = require(`${global.APP_ROOT}/routes/route2`);

// Standard deploy info router
const deploy = require(`${global.APP_ROOT}/routes/deploy`);

module.exports = async (app) => {
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  app.use(cors());

  // Add custom header to all responses - useful for testing responses
  app.use(function (req, res, next) {
    res.set("TF-Application", 0);
    next();
  });

  // init routes
  app.use("/admin", route1);
  app.use("/public", route2);
  app.use("/deploy", deploy);

  return app;
};
