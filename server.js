const express = require("express");
const cors = require("cors");

const db = require("./src/config/db");

var envPath = ".env";

require("dotenv").config({
  path: envPath,
});

db.connect();

const routes = require("./src/routes");

const app = express();
app.use(express.json());
app.use(cors());

routes.register(app);

app.listen(process.env.PORT);

module.exports = app;
