const path = require("path");
// Use this for referencing nested modules
global.APP_ROOT = path.resolve(__dirname);
const { NODE_ENV } = process.env;

// Load .env file based on NODE_ENV which is set by npm run command
const dotEnvPath =
  NODE_ENV === "production" ? ".env" : NODE_ENV && `.env.${NODE_ENV}`;

require("dotenv").config({
  path: dotEnvPath,
});

const express = require("express");

// App references the index.js file in the app folder - its this which steps through the start up process
const app = require(`./app`);

// call the index.js file in the app folder passing the express object
app(express());
