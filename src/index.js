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
  // const password = '12345';
  // const user = await User.findByPk(1)

  // console.log(bcrypt.compareSync(password,user.password))
  //const user1 = await user.getById(1);
  // console.log(user1);

 // const newToken=user.createToken({email:'karangarg218@gmail.com',id:1})
  const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmFuZ2FyZzIxOEBnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNjk3NTI3NzYyLCJleHAiOjE2OTc1MzEzNjJ9.UtxeSuCrPqdkEq_V7cs3SbmbsEO-T_HRfZ4rJeFw_y8'
  const result = user.verifyToken(token)
  console.log(result)
  app.listen(PORT, () => {
    console.log(`Server Started`);
  });
};
preapareAndStartServer();
