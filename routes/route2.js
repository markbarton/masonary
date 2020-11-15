const express = require("express");
const router = express.Router();

const getPublicData = require("../controllers/getPublicData");

/** All routes here will have a url path added in the config_express file
 * e.g. /doc  will really be /tf-data/doc
 * If your app is used for KB and TF then seperate your routes based on access to senstive data
 *  */

router.get("/doc/:?", getPublicData); //? = optional param

module.exports = router;
