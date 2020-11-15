/**
 * Deploy is a standard route used by Auto Deploy to interrogate the application after deployment
 * It will return the application version number and the current env settings
 */

const express = require("express");
const router = express.Router();
const info = require("../controllers/deploy/info");

router.get("/info", info); //? = optional param

module.exports = router;
