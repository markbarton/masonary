const express = require("express");
const router = express.Router();

const getExampleItem = require("../controllers/getExampleItem");

/** All routes here will have a url path added in the config_express file
 * e.g. /create-doc  will really be /admin/my-doc
 */
router.get("/my-doc/:id?", getExampleItem); //? = optional parameter

module.exports = router;
