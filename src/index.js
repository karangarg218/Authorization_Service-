const express = require("express");
const app = express();
const apiRoutes = require("./routes/index");
const bodyParser = require("body-parser");
const { PORT, DB_SYNC } = require("./config/serverConfig");
const db = require("../src/models/index");

const preapareAndStartServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server Started`);
    if(DB_SYNC){
        db.sequelize.sync({alter:true})
    }
  });
};
preapareAndStartServer();
