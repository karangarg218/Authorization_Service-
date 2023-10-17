const express = require("express");
const app = express();
const apiRoutes = require("./routes/index");
const bodyParser = require("body-parser");
const User = require("./repository/user-repository");
const { PORT } = require("./config/serverConfig");
const bcrypt = require("bcrypt");
const UserService= require('./service/user-service')
let user = new UserService();
const preapareAndStartServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`Server Started`);
  });
};
preapareAndStartServer();
